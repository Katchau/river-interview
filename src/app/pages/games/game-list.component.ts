import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Game, GameMockClient } from 'src/app/shared';

@Component({
  selector: 'app-games',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

	public gameData: Game[] = [];
	gamesData$: Observable<Game[]>;

	constructor(
		gameMockClient: GameMockClient,
		public router: Router
	) {
		this.gamesData$ = gameMockClient.getAll$();
    this.gamesData$.pipe(take(1)).subscribe((data) => {
			if (data && data.length) {
				this.gameData = data;
			}
		})
	}

  ngOnInit(): void {
    
  }

	redirectGamePage(slug: string) {
		if (slug) {
			this.router.navigateByUrl(`/game/${slug}`);
		}
	}
}
