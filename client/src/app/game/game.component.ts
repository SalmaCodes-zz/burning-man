import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { SocketService } from '../socket.service';
import { Locker, DRIVERS } from 'angular-safeguard';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  user;
  error: string = "";
  guess: string = "";
  game: any = { word: "", host: {} };
  gameId: string = "";
  ioConnection: any;

  constructor(
    private _httpService: HttpService,
    private locker: Locker,
    private socket: SocketService,
    private route: ActivatedRoute,
    private router: Router) { }

  
  setGamePlayer() {
    if (!this.game.player && this.user._id != this.game.host._id) {
      console.log("SEND PLAYER");
      this.socket.sendPlayer(this.game._id, this.user._id);
    } 
    // else if (this.user._id != this.game.host._id || 
    //   this.user._id != this.game.player._id) {
    //   this.router.navigate(['dashboard']);
    // }
  }

  ngOnInit() {
    let user = this.locker.get(DRIVERS.SESSION, 'user');
    if (!user) {
      this.router.navigate(['']);
    } else {
      this.user = user;
    }
    this.route.params.subscribe(params => {
      this.gameId = params.id;
      this.initToConnection();
      this.getGameFromService();
    })
  }

  initToConnection() {
    this.socket.initSocket();

    this.ioConnection = this.socket.onGameUpdate().subscribe((data) => {
      console.log("Recieved game update:", data);
      if (data['message'] == 'Error') {
        this.error = data['error'].message;
        console.log("GAME UPDATE ERROR", data['error']);
      } else {
        this.game = data['data'];
        this.getGameFromService();
        console.log("GAME UPDATE", data['data']);
      }
    });

    this.socket.onEvent('connect').subscribe(() => {
      console.log('You are connected, room', this.gameId);
      this.socket.sendRoom(this.gameId);
    });

    this.socket.onEvent('other:connection').subscribe(() => {
      console.log('Somebody else connected!');
    });

    this.socket.onEvent('disconnect').subscribe(() => {
      console.log('Somebody disconnected!');
    });
  }

  getGameFromService() {
    this._httpService.getGame(this.gameId).subscribe(data => {
      if (data['error']) {
        this.error = data['error'].message;
      } else {
        console.log("GAME DATA", data['data']);
        this.game = data['data'];
        this.setGamePlayer();
      }
    })
  }

  sendGuess() {
    this.guess = this.guess.toUpperCase();
    console.log("Guessed", this.guess);
    if (this.game.guesses.includes(this.guess) ||
      this.game.misses.includes(this.guess)) {
      this.error = "You already guessed " + this.guess + "!" +
        " Try a different letter."
    } else {
      this.socket.sendGuess(this.gameId, this.guess);
      this.guess = "";
    }
  }
}
