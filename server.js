var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gamedb');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'A Name must contain at least three characters']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'This username already exists'],
        minlength: [3, 'A username must contain at least three characters']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'A password must contain at least six characters']
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    }
    // TODO: add active game?
})

var GameSchema = new mongoose.Schema({
    word: {
        type: String,
        required: [true, 'Word is required'],
        minlength: [2, 'A word must contain at least two characters']
    },
    guesses: [{
        type: String,
        minlength: 1,
        maxLength: 1
    }],
    misses: [{
        type: String,
        minLength: 1,
        maxLength: 1
    }],
    status: {
        type: Boolean,
        default: true
    },
    master: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

UserSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10 /* SALT_WORK_FACTOR */, function (err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
})

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var User = mongoose.model('User', UserSchema);
var Game = mongoose.model('Game', GameSchema);

mongoose.Promise = global.Promise;

// User.deleteMany({}, function (err) {});
// Routes

// Registeration
app.post('/users', function (req, res) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", data: user })
        }
    })
})

// Login
app.post('/users/login', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let error = { message: 'Login Error: ' };
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            if (user) {
                user.comparePassword(password, function (err, isMatch) {
                    if (isMatch) {
                        res.json({ message: "Success", data: user })
                    } else {
                        error.message += "password doesn't match";
                        res.json({ message: "Error", error: error })
                    }
                })
            } else {
                error.message += 'username not found.';
                res.json({ message: "Error", error: error });
            }
        }
    })
})


// Get Game by ID
app.get('/games/:id', function (req, res) {
    Game.findById(req.params.id, function (err, game) {
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
io.sockets.on('connection', function(socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
})

