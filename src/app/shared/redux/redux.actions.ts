import { Game } from "../client/game.model";

export const EDIT_SEARCH = "[APP] name-search-edit";

export const SET_PROVIDERS = "[APP] set-providers";
export const RESET_PROVIDER = "[APP] reset-provider";

export const ADD_GAME = "[APP] add-recent-game";

export const LOAD_STORAGE = "[STORAGE] load-local-storage";

export const SIDEBAR_STATE = "[MENU] sidebar-state";

export class EditSearch {
	static readonly type = EDIT_SEARCH;
	constructor(public text: string) {}
}

export class SetProviders {
	static readonly type = SET_PROVIDERS;
	constructor(public providers: string[]) {}
}

export class ResetProvider {
	static readonly type = RESET_PROVIDER;
}

export class AddRecentGame {
	static readonly type = ADD_GAME;
	constructor(public newGame: Game) {}
}

export class LoadLocalStorage {
	static readonly type = LOAD_STORAGE;
	constructor(public search: string, public providers: string[], public recentGames: Game[] ) {}
}

export class SidebarChange {
	static readonly type = SIDEBAR_STATE;
}