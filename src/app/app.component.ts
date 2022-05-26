import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { Game, LoadLocalStorage } from "./shared";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	constructor (store: Store) {
	// this should be on its own service to do these methods, as to not scatter these around the code
		// Also I commented these options as later on I realized this did not make much sense
		// But I didn't really wanted to delete this just in case

		// const search: string = localStorage.getItem("search") || "";
		// const providers: string[] = JSON.parse(localStorage.getItem("providers") || "[]");
		const recentGames: Game[] =  JSON.parse(localStorage.getItem("recentGames") || "[]");
		store.dispatch(new LoadLocalStorage("", [], recentGames));
	}
}
