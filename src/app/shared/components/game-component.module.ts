import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameFooterComponent } from "./game-footer/game-footer.component";
import { GameSearchComponent } from "./game-search/game-search.component";

const COMPONENTS = [
	GameFooterComponent,
	GameSearchComponent
];

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		...COMPONENTS
	],
	exports: [
		...COMPONENTS
	]
})
export class GameComponentsModule {

}
