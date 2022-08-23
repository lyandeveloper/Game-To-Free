import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Game } from '../services/game-service/game';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: any = ''
  id = 0

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGame()
  }

  getGame() {
    this.id = this.route.snapshot.params['id'];
    this.gameService.getGame(this.id).subscribe((game: any) => {
      this.gameService.parseCategory(this.game)
      this.game = game
      this.game.release_date = this.game.release_date.split('-')[0]
    });
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
