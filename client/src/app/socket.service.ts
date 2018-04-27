import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as io from 'socket.io-client';

const SERVER_URL = 'http://localhost:8000';

@Injectable()
export class SocketService {

  private socket;

  constructor() { }

  initSocket() {
    this.socket = io(SERVER_URL);
  }

  sendGuess(roomId, guess) {
    this.socket.emit('guess', {id: roomId, guess: guess});
  }

  sendRoom(roomId) {
    this.socket.emit('room', roomId);
  }

  sendPlayer(roomId, userId) {
    this.socket.emit('player', {id: roomId, user: userId})
  }

  onGameUpdate() {
    return new Observable<object>(observer => {
      this.socket.on('game_update', (data) => observer.next(data));
    });
  }

  onEvent(event) {
    return new Observable<object>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

}