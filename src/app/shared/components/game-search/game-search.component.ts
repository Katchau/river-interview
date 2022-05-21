import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Game } from '../../client/game.model';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameSearchComponent implements OnInit {

  @Input() 
  public gameData?: Game;
  constructor() {}

  ngOnInit(): void {
  }

}
