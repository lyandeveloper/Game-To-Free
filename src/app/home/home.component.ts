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
    this.getGames()
  }

  getGames() {
    this.gameService.getGames().subscribe((games: any) => {
      this.games = this.gameService.paginate(games, 1, 8);
      this.gameService.parseCategories(this.games)
    });
  }

}
