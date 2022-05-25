import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BodyLayoutComponent } from "./body-layout/body-layout.component";
import { GamePageComponent } from "./game-page/game-page.component";
import { GameListComponent } from "./games/game-list.component";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const ROUTES: Routes = [
	{ path: "", component: BodyLayoutComponent, children:[
		{ path: "", component: HomeComponent },
		{ path: "game-list", component: GameListComponent },
		{ path: "game/:id", component: GamePageComponent },
		{ path: "**", component: PageNotFoundComponent },
	]},

];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES, {
		// enableTracing: true
	})],
	exports: [RouterModule],
})
export class AppPagesRoutingModule {

}
