import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { take, tap } from "rxjs/operators";
import { AddRecentGame, Game, GameMockClient } from "src/app/shared/";

@Component({
  selector: "app-game",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"]
})
export class GamePageComponent {

  gameData!: Game;
  playGame = false;

  constructor(
	public sanitizer: DomSanitizer,
	public store: Store,


	router: Router,
	route: ActivatedRoute,
		gameMockClient: GameMockClient,
  ) {
	const slug: string = route.snapshot.paramMap.get("id") || "";
	const game = gameMockClient.getGame$(slug);

	game.pipe(take(1)).subscribe((data: Game | undefined) => {
		if (data === undefined) {
		  router.navigateByUrl("/404");
		} else {
		  this.gameData = data;
		  this.updateStoreGame();
		}
	});
  }

  updateStoreGame(): void {
	  this.store.dispatch(new AddRecentGame(this.gameData));
  }

  showGameIframe(event: Event) {
  	event.preventDefault();
	  this.playGame = true;
  }

  iframeURL(url: string) {
  	return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
