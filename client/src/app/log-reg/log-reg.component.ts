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
  regUser = ""

  constructor(private _httpService: HttpService,
    private router: Router,  
    private locker: Locker
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    if (this.regUser == "") {
      this.error = "Name cannot be empty.";
    } else {
      this._httpService.register(this.regUser).subscribe(data => {
        if (data['message'] == 'Error') {
          this.error = data['error']['message'];
        } else {
          // Save this user in session, and navigate to dashboard
          console.log("DATA USER", data['data'])
          this.locker.set(DRIVERS.SESSION,'user', data['data']);
          this.router.navigate(['dashboard']);
        }
      })
    }
  }
}
