import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', component: LogRegComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
