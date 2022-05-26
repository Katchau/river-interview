import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../client/game.model';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameSearchComponent implements OnInit {

  @Input() 
  public gameData!: Game;
  @Input()
  public hidesHeader?: boolean;
  @Output()
  public gameRedirect: EventEmitter<string> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  public emitRedirect(event: Event): void {
    event.preventDefault();
    this.gameRedirect.emit(`${this.gameData?.slug}`)
  }
}
