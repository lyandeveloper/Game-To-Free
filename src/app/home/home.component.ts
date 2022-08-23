import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: any = []

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars() {
    this.gameService.getGames().subscribe((games: any) => {
      this.games = this.gameService.paginate(games, 1, 8);
      this.parseCategories()
    });
  }

  parseCategories() {
    this.games.forEach((game:any )=> {
      game.platform == 'PC (Windows)' ? game.platform = 'PC' : game.platform
      game.platform == 'Web Browser' ? game.platform = 'Web' : game.platform

      return game
    })
  }



}
