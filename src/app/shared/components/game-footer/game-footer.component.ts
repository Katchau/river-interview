import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Game } from '../../client/game.model';

@Component({
  selector: 'app-game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default,
})
export class GameFooterComponent implements OnInit, OnChanges {

  @Input()
  public recentGames: Game[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
