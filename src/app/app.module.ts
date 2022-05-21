import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppPagesModule } from "./pages/pages.module";
import { SideBarComponent } from "./shared/components/side-bar/side-bar.component";

@NgModule({
	declarations: [
		AppComponent,
		SideBarComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		BrowserModule,
		AppPagesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
