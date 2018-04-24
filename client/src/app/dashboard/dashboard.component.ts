import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locker, DRIVERS } from 'angular-safeguard';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  gameId: string = "";
  newGameWord: string = "";
  error: string = "";
  // activeGame: get from locker

  constructor(private _http: HttpService, 
    private router: Router, private locker: Locker) { }

  ngOnInit() {
    let user = this.locker.get(DRIVERS.SESSION, 'user');
    if (!user) {
      this.router.navigate(['']);
    } else {
      this.user = user;
    }
  }

  // id: 5adfab92c2e6fa2b317bd8c7

  onNewGameSubmit() {
    this._http.newGame(this.newGameWord).subscribe(data => {
      if (data['message'] == 'Error') {
        this.error = data['error']['message'];
      } else {
        console.log('GAME DATA', data['data']);
        this.router.navigate(['/game/' + data['data']['_id']]);
      }
    })
  }

  onJoinGameSubmit() {
    // TODO: navigate to the game page directly.
    this._http.getGame(this.gameId).subscribe(data => {
      if (data['message'] == 'Error') {
        this.error = data['error']['message'];
      } else {
        console.log('GAME DATA', data['data']);
        this.router.navigate(['/game/' + data['data']['_id']]);
      }
    })
  }

}
