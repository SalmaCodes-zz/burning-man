import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Locker, DRIVERS } from 'angular-safeguard';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {
  error: string = "";
  pwConfirm: string = "";
  regUser = {
    name: "", username: "", password: ""
  };
  logUser = {
    name: "", password: ""
  };
  constructor(private _httpService: HttpService,
    private router: Router,  
    private locker: Locker
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    if (this.regUser.password !== this.pwConfirm) {
      this.error = "Validation Failed: password confirmation doesn't match password";
    } else {
      this._httpService.register(this.regUser).subscribe(data => {
        if (data['message'] == 'Error') {
          this.error = data['error']['message'];
        } else {
          // Save this user in session, and navigate to dashboard
          this.locker.set(DRIVERS.SESSION,'user', data['data']);
          this.router.navigate(['dashboard']);
        }
      })
    }
  }

  onLoginSubmit() {
    this._httpService.login(this.logUser).subscribe(data => {
      if (data['message'] == 'Error') {
        this.error = data['error']['message'];
      } else {
        // See if there's even a user found.
        if (!data['data']) {
          this.error = "Error: user doesn't exist";
        } else {
          // Save this user in session, and navigate to dashboard
          this.locker.set(DRIVERS.SESSION,'user', data['data']);
          this.router.navigate(['dashboard']);
        }
      }
    })
  }

}
