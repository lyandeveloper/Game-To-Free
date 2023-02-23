import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games: any = [];
  page = 1;

  constructor(
    private gameService: GameService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getGames();
  }

  loadMore() {
    // this.page.subscribe()
  }

  getGames() {
    this.gameService.getGames().subscribe((games: any) => {
      this.games = this.gameService.paginate(games, this.page, 8);
      this.gameService.parseCategories(this.games);
    });
  }
}
