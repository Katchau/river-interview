import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  redirectGamePage(slug: string) {
		if (slug) {
			this.router.navigateByUrl(`/game/${slug}`);
		}
	}
}
