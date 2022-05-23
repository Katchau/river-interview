import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Game, GameMockClient } from 'src/app/shared/';

@Component({
  selector: 'app-game',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public gameData?: Game;

  constructor(
    router: Router,
    route: ActivatedRoute,
		gameMockClient: GameMockClient,
  ) { 
    const slug: string = route.snapshot.paramMap.get("id") || "";
    const game = gameMockClient.getGame$(slug);
    
    game.pipe(take(1)).subscribe((game: Game | undefined) => {
      if (game === undefined) {
        router.navigateByUrl("/404");
      } else {
        this.gameData = game;
      }
    })
  }

  ngOnInit(): void {}

}
