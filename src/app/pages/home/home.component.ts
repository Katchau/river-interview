import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { take } from 'rxjs/operators';

import { GameMockClient, Game } from "../../shared";

const NAME_KEBAB = "app-home";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.scss"],
	host: { class: NAME_KEBAB },
	changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit, OnDestroy {

	public gameData: Game[] = [];
	unsubscribe?: Subscription;
	gamesData$: Observable<Game[]>;

	constructor(
		gameMockClient: GameMockClient,
		public router: Router
	) {
		this.gamesData$ = gameMockClient.getAll$();
	}

	ngOnInit(): void {
		// take 1 unsubscribes to the event but I'll let this stay just in case I change this and then I forget to unsubscribe :) 
		this.unsubscribe = this.gamesData$.pipe(take(1)).subscribe((data) => {
			if (data && data.length) {
				this.gameData = data;
			}
		})
	}

	ngOnDestroy(): void {
		if (this.unsubscribe) {
			this.unsubscribe.unsubscribe();
		}
	}

	redirectGamePage(slug: string) {
		if (slug) {
			this.router.navigateByUrl(`/game/${slug}`);
		}
	}

}
