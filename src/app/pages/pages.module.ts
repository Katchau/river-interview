import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameComponentsModule } from "../shared/components/game-component.module";
import { BodyLayoutComponent } from "./body-layout/body-layout.component";
import { GamePageComponent } from "./game-page/game-page.component";
import { GamesComponent } from "./games/games.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { AppPagesRoutingModule } from "./pages-routing.module";

const COMPONENTS = [
	HomeComponent,
	GamesComponent,
	GamePageComponent,
	PageNotFoundComponent,
	BodyLayoutComponent
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		GameComponentsModule
	],
	declarations: [
		...COMPONENTS
	],
	exports: [
		...COMPONENTS
	]
})
export class AppPagesModule {

}
