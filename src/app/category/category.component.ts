import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: string | null = ''
  games: any = []

  constructor(private gameService: GameService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.getGameByCategory()

  }

  getGameByCategory() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.gameService.getGamesByCategory(this.category).subscribe((games: any) => {
      this.games = this.gameService.paginate(games, 1, 32);
      this.gameService.parseCategories(this.games)
    });
  }

}
