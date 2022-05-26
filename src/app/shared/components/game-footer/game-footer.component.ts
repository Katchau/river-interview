import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Game } from "../../client/game.model";

@Component({
  selector: "app-game-footer",
  templateUrl: "./game-footer.component.html",
  styleUrls: ["./game-footer.component.scss"],
	changeDetection: ChangeDetectionStrategy.Default,
})
export class GameFooterComponent {

  @Input()
  recentGames: Game[] = [];
  constructor(public router: Router) { }

  redirectGamePage(slug: string) {
		if (slug) {
		  if (this.router.url.includes("game/")) {
		  this.router.navigateByUrl("/", {skipLocationChange: true}).then(() =>
		  this.router.navigate([`/game/${slug}`]));
	  	  } else {
		  this.router.navigateByUrl(`/game/${slug}`);
		  }
		}
	}
}
