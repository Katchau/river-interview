import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit, Pipe, PipeTransform } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { debounceTime, take  } from "rxjs/operators";
import { EditSearch, Game, GameMockClient, ResetProvider, SetProviders } from "src/app/shared";


@Pipe({ name: "gameSearchFilter" })
export class GameSearchFilter implements PipeTransform {
	transform(gameList: Game[], search?: string, providers?: string[]) {
	return gameList.filter(game => {
		let isValid = true;
		if (search) {
		isValid = game.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
		}

		if (providers && providers.length) {
		isValid = providers.includes(game.providerName) && isValid;
		}

		return isValid;
	});
	}
}

@Component({
	selector: "app-games",
	templateUrl: "./game-list.component.html",
	styleUrls: ["./game-list.component.scss"]
})
export class GameListComponent implements OnInit, OnDestroy {

	gameData: Game[] = [];
	providers: string[] = [];
	formGroup: FormGroup;
	unsubscriber: Subscription[] = [];

	gamesData$: Observable<Game[]>;
	currentSearch = "";

	constructor(
		public router: Router,
		public route: ActivatedRoute,
		public store: Store,
		public location: Location,
		gameMockClient: GameMockClient,
	) {

		this.formGroup = new FormGroup({
			search: new FormControl(""),
			providers: new FormControl([]),
		});

		this.gamesData$ = gameMockClient.getAll$();

		this.gamesData$.pipe(take(1)).subscribe(data => {
			if (data && data.length) {
		this.gameData = data;
		this.createProvidersList();
			}
		});
	}

	ngOnInit(): void {

		// this is still valid for example
		// const coiso = this.gamesData$.subscribe(data => {
		// 	if (data && data.length) {
		// 		this.gameData = data;
		// 		this.createProvidersList();
		// 	}
		// });

		// this.unsubscriber.push(coiso);

		this.route.queryParams.pipe(take(1)).subscribe(params => {
			if (params.searchTerm) {
				this.formGroup.controls.search.setValue(params.searchTerm);
				this.updateSearchText(params.searchTerm);
			}
			const provs: string[] = typeof params.providers === "string" ? [params.providers] : params.providers;
			if (params.providers) {
				this.formGroup.controls.providers.setValue(provs);
				this.updateProvidersList(params.providers);
			}
		});
		// debounces 500ms to delay the request and prevents in between requests
		this.formGroup.controls.search.valueChanges.pipe(debounceTime(500)).subscribe(data => {
			this.updateSearchText(data);
		});
		this.formGroup.controls.providers.valueChanges.subscribe(data => {
			this.updateProvidersList(data);
		});
	}

	ngOnDestroy(): void {
		this.unsubscriber.forEach((subscription: Subscription) => {
			subscription.unsubscribe();
		});
	}

	getCurrentSearch(): string {
	// this is not this.formGroup.controls["search"].value since we dont want to update right away as opposed to the filters
		return this.currentSearch;
	}

	getCurrentProviders(): string[] {
		return this.formGroup.controls.providers.value;
	}

	resetProviders(event: Event) {
		event.preventDefault();
		this.formGroup.controls.providers.setValue([]);
	}


	createProvidersList(): void {
		if (this.gameData.length && !this.providers.length) {
			const allProviders = this.gameData.map(game => game.providerName);
			// removes repeated
			this.providers = [... new Set(allProviders)];
		}
	}

	updateProvidersList(providers: string[]) {
		this.store.dispatch(new SetProviders(providers));
		this.updatePageState();
	}

	updateSearchText(search: string) {
		this.store.dispatch(new EditSearch(search));
		this.currentSearch = search;
		this.updatePageState();
	}

	updatePageState(): void {
		this.router.navigate(
			["."],
			{
			relativeTo: this.route,
			queryParams: { searchTerm: this.getCurrentSearch(), providers: this.getCurrentProviders() },
		});
	}

	redirectGamePage(slug: string) {
		if (slug) {
			this.router.navigateByUrl(`/game/${slug}`);
		}
	}
}
