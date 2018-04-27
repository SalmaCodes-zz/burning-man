import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameComponent } from './game/game.component';
import { HttpService } from './http.service';
import { SocketService } from './socket.service';


@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    DashboardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LockerModule
  ],
  providers: [
    HttpService, 
    SocketService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
