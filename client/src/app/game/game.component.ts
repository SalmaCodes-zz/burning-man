import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  error: string = "";
  game: any = {};

  constructor(private _httpService: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._httpService.getGame(params.id).subscribe(data => {
        if (data['error']) {
          this.error = data['error'].message;
        } else {
          console.log("GAME DATA", data['data']);
          this.game = data['data'];
        }
      })
    })
  }

}
