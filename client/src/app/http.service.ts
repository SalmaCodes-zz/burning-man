import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  register(user) {
    return this._http.post('/users', user);
  }

  login(user) {
    return this._http.post('/users/login', user);
  }

  getActiveGames() {
    return this._http.get('/games');
  }
  getGame(id) {
    return this._http.get('/games/' + id);
  }

  newGame(word, hint, host) {
    return this._http.post('/games',
      { word: word, hint: hint, host: host });
  }

}
