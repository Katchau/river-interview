import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Game, LoadLocalStorage } from "./shared";
import { AppStateModel } from "./shared/redux/redux.state";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	constructor (store: Store) {
	      // this should be on its own service to do these methods, as to not scatter these around the code
		const search: string = localStorage.getItem("search") || "";
		const providers: string[] = JSON.parse(localStorage.getItem("providers") || "[]");
		const recentGames: Game[] =  JSON.parse(localStorage.getItem("recentGames") || "[]");
		store.dispatch(new LoadLocalStorage(search, providers, recentGames));
	}
}
