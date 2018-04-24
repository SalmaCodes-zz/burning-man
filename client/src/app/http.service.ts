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

  getGame(id) {
    return this._http.get('/games/' + id);
  }

  newGame(word) {
    return this._http.post('/games', { word: word });
  }

}
