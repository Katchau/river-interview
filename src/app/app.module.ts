import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppPagesModule } from "./pages/pages.module";
import { SideBarComponent } from "./shared/components/side-bar/side-bar.component";
import { NgxsModule } from "@ngxs/store";
import { AppState } from "./shared/redux/redux.state";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";

@NgModule({
	declarations: [
		AppComponent,
		SideBarComponent,
		NavBarComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		BrowserModule,
		AppPagesModule,
		NgxsModule.forRoot([AppState],  { developmentMode: true }),
		BrowserAnimationsModule,

		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
