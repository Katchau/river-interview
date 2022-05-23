import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable, of } from "rxjs";
import { Game } from "./game.model";
import { find, switchMap, take } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class GameMockClient {

	private readonly dataURL = "assets/game.mock-data.json";

	constructor(
		private http: HttpClient
	) {
	}

	getAll$(): Observable<Game[]> {
		return this.http.get<Game[]>(this.dataURL);
	}

	// this is to simulate a specific get request with the slug
	getGame$(slug: string): Observable<Game | undefined> {
		return this.http.get<Game[]>(this.dataURL).pipe(switchMap((data: Game[]) => {
			const game: Game | undefined = data.find(x => x.slug === slug);
			return of(game);
		}))
	}
}
