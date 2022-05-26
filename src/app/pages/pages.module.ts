import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameComponentsModule } from "../shared/components/game-component.module";
import { BodyLayoutComponent } from "./body-layout/body-layout.component";
import { GamePageComponent } from "./game-page/game-page.component";
import { GameListComponent, GameSearchFilter } from "./games/game-list.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { AppPagesRoutingModule } from "./pages-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const COMPONENTS = [
	HomeComponent,
	GameListComponent,
	GamePageComponent,
	PageNotFoundComponent,
	BodyLayoutComponent,
	GameSearchFilter,
];

@NgModule({
	imports: [
		CommonModule,
		AppPagesRoutingModule,
		GameComponentsModule,

		MatInputModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
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
