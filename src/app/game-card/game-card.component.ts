import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() id: number = 0
  @Input() thumbnail = ''
  @Input() title = ''
  @Input() platform = ''
  @Input() description = ''

  constructor() { }

  ngOnInit(): void {
  }

}
