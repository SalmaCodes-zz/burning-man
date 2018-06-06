var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burndb');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'A Name must contain at least three characters']
    }
})

var GameSchema = new mongoose.Schema({
    word: {
        type: String,
        uppercase: true,
        required: [true, 'Word is required'],
        minlength: [2, 'A word must contain at least two characters']
    },
    hint: {
        type: String,
        default: ""
    },
    guesses: [{
        type: String,
        uppercase: true,
        minlength: 1,
        maxLength: 1
    }],
    misses: [{
        type: String,
        uppercase: true,
        minLength: 1,
        maxLength: 1
    }],
    status: {
        type: Boolean,
        default: true
    },
    win: {
        type: Boolean,
        default: false
    },
    burnLevel: {
        type: Number,
        default: 0
    },
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    player: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})


var User = mongoose.model('User', UserSchema);
var Game = mongoose.model('Game', GameSchema);

mongoose.Promise = global.Promise;

// User.deleteMany({}, function (err) {});
// Game.deleteMany({}, function (err) {});
// Routes

// Registeration
app.post('/users', function (req, res) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) {
            console.log("ERROR", err)
            res.json({ message: "Error", error: err })
        } else {
            console.log("SUCCESS", user)
            res.json({ message: "Success", data: user })
        }
    })
})

// Get all active games
app.get('/games', function (req, res) {
    Game.find(
        { status: true })
        .populate('host').populate('player').exec(
            function (err, games) {
                if (err) {
                    res.json({ message: "Error", error: err })
                } else {
                    if (games) {
                        res.json({ message: "Success", data: games })
                    } else {
                        let error = { message: "Game doesn't exist!" };
                        res.json({ message: "Error", error: error });
                    }
                }
            })
})


// Get Game by ID
app.get('/games/:id', function (req, res) {
    Game.findById(req.params.id)
        .populate('host').populate('player').exec(
            function (err, game) {
                if (err) {
                    res.json({ message: "Error", error: err })
                } else {
                    if (game) {
                        res.json({ message: "Success", data: game })
                    } else {
                        let error = { message: "Game doesn't exist!" };
                        res.json({ message: "Error", error: error });
                    }
                }
            })
})

// New Game
app.post('/games', function (req, res) {
    var game = new Game(req.body);
    game.save(function (err) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", data: game })
        }
    })
})


app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/index.html"));
});

// Setting our Server to Listen on Port: 8000
var server = app.listen(8000, function () {
    console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {

    // Log whenever a user connects
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);

    // Log whenever a client disconnects from our websocket server
    socket.on('disconnect', function () {
        console.log("Client/socket is connected!");
    });

    // once a client has connected, we expect to get a ping from them saying what room they want to join
    socket.on('room', function (room) {
        socket.join(room);
    });

    socket.on('player', function (data) {
        Game.findById(data.id)
            .populate('host').populate('player').exec(
                function (err, game) {
                    if (err) {
                        console.log("Error", err);
                    } else {
                        if (game) {
                            game.player = data.user;
                            game.save(function (err) {
                                if (err) {
                                    console.log("Error", err);
                                } else {
                                    result = { message: "Success", data: game };
                                    io.to(data.id).emit('game_update', result);
                                }
                            })
                        }
                    }
                });
    });

    // When we receive a 'guess' event from our client.
    socket.on('guess', (data) => {
        console.log("room", data.id, "guess", data.guess);
        var result;
        Game.findById(data.id)
            .populate('host').populate('player').exec(
                function (err, game) {
                    console.log("FindBYID #1");
                    if (err) {
                        result = { message: "Error", error: err };
                    } else {
                        if (game) {
                            console.log("GAME #2");
                            if (game.active == false || game.burnLevel >= 7) {
                                console.log("GAME #3");
                                let error = { message: "Game is over!" };
                                result = { message: "Error", error: error };
                                io.to(data.id).emit('game_update', result);
                                return;
                            }
                            // Game is active, check guess. 
                            // TODO: check if guessed before.
                            if (game.guesses.includes(data.guess) ||
                                game.misses.includes(data.guess)) {
                                console.log("GAME #4");
                                let error = { message: "Already guessed" + data.guess + "!" };
                                result = { message: "Error", error: error };
                                io.to(data.id).emit('game_update', result);
                                return;
                            }
                            if (game.word.indexOf(data.guess) > -1) {
                                game.guesses.push(data.guess);
                                // Check if we have a win?
                                var win = true;
                                for (var i = 0; i < game.word.length; i++) {
                                    if (!game.guesses.includes(game.word[i])) {
                                        win = false;
                                        break;
                                    }
                                }
                                if (win) {
                                    game.win = true;
                                    game.status = false;
                                }

                            } else {
                                game.misses.push(data.guess);
                                game.burnLevel++;
                                if (game.burnLevel >= 7) {
                                    game.status = false;
                                }
                            }
                            game.save(function (err) {
                                if (err) {
                                    result = { message: "Error", error: err };

                                } else {
                                    result = { message: "Success", data: game };
                                }
                                io.to(data.id).emit('game_update', result);
                                return;
                            })

                            // res.json({ message: "Success", data: game })
                        } else {
                            let error = { message: "Game doesn't exist!" };
                            result = { message: "Error", error: error };
                            io.to(data.id).emit('game_update', result);
                        }
                    }
                })
    });

    // //  EMIT:
    // socket.emit('my_emit_event');
    // //  BROADCAST:
    // socket.broadcast.emit("my_broadcast_event");
    // //  FULL BROADCAST:
    // io.emit("my_full_broadcast_event");

})

