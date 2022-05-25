import { Game } from "../client/game.model";

export const EDIT_SEARCH: string = "[APP] name-search-edit";

export const ADD_PROVIDER: string = "[APP] add-provider";
export const REMOVE_PROVIDER: string = "[APP] remove-provider";
export const RESET_PROVIDER: string = "[APP] reset-provider";

export const ADD_GAME: string = "[APP] add-recent-game";

export const LOAD_STORAGE: string = "[STORAGE] load-local-storage";

export class EditSearch {
    static readonly type = EDIT_SEARCH;
    constructor(public text: string) {}
}

export class AddProvider {
    static readonly type = ADD_PROVIDER;
    constructor(public provider: string) {}
}

export class RemoveProvider {
    static readonly type = REMOVE_PROVIDER;
    constructor(public provider: string) {}
}

export class ResetProvider {
    static readonly type = RESET_PROVIDER;
    constructor() {}
}

export class AddRecentGame {
    static readonly type = ADD_GAME;
    constructor(public newGame: Game) {}
}

export class LoadLocalStorage {
    static readonly type = LOAD_STORAGE;
    constructor(public search: string, public providers: string[], public recentGames: Game[] ) {}
}