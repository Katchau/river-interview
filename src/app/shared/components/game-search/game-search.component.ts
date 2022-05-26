import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Game } from "../../client/game.model";

@Component({
  selector: "app-game-search",
  templateUrl: "./game-search.component.html",
  styleUrls: ["./game-search.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameSearchComponent {

  @Input()
  gameData!: Game;

  @Input()
  hidesHeader?: boolean;

  @Output()
  gameRedirect: EventEmitter<string> = new EventEmitter();


  emitRedirect(event: Event): void {
	  event.preventDefault();
	  this.gameRedirect.emit(`${this.gameData?.slug}`);
  }
}
