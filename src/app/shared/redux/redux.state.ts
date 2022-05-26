import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Game } from "../client/game.model";
import { AddRecentGame, EditSearch, LoadLocalStorage, ResetProvider, SetProviders, SidebarChange } from "./redux.actions";

import { patch, removeItem, insertItem } from '@ngxs/store/operators';

export interface AppStateModel {
    search: string;
    providers: string[];
    recentGames: Game[];
    sidebarState: boolean;
}

// TODO let me try to directly put the localStorage here
@State<AppStateModel>({
    name: "app",
    defaults: {
        search: "",
        providers: [],
        recentGames: [],
        sidebarState: true,
    }
})
@Injectable()
export class AppState {

    @Selector()
    static getRecentGames(state: AppStateModel): Game[] {
        return state.recentGames
    }

    @Selector()
    static getProviders(state: AppStateModel): string[] {
        return state.providers
    }

    @Selector()
    static getSearchText(state: AppStateModel): string {
        return state.search
    }

    @Selector()
    static getSidebarState(state: AppStateModel): boolean {
        return state.sidebarState
    }


    @Action(EditSearch)
    updateSearch({patchState}: StateContext<AppStateModel>, {text}: EditSearch) {
        patchState({
            search: text
        });
    }

    @Action(SetProviders)
    setproviders({patchState}: StateContext<AppStateModel>, {providers}: SetProviders) {
        patchState({
            providers: providers
        })
    }

    @Action(ResetProvider)
    resetProvider({patchState}: StateContext<AppStateModel>) {
       patchState({
           providers: [],
       });
    }

    @Action(LoadLocalStorage)
    loadLocalStorage({patchState}: StateContext<AppStateModel>, action: LoadLocalStorage) {
        patchState({
            search: action.search || "",
            providers: action.providers || [],
            recentGames: action.recentGames || [],
        });
    }

    @Action(AddRecentGame)
    addRecentGame(ctx: StateContext<AppStateModel>, {newGame}: AddRecentGame) {
       const state = ctx.getState();
       
       const index = state.recentGames.findIndex((game: Game) => {
        return game.id === newGame.id;
       })
       // need to check if this is required in case if removeItem throws an error on not found
       if (index !== -1) {
        ctx.setState(
            patch({
             recentGames: removeItem<Game>(oldGame => oldGame?.id === newGame.id)
            })
        );
       }
       if (state.recentGames.length === 5 && index === -1) {
           // tentar usar patchState com .filter no array 
            ctx.setState(
                patch({
                recentGames: removeItem<Game>(oldGame => oldGame?.id === state.recentGames[4].id)
                })
            );
       }
       ctx.setState(
            patch({
            recentGames: insertItem<Game>(newGame, 0),
            })
        );
    }

    @Action(SidebarChange)
    changeSidebarState(ctx: StateContext<AppStateModel>) {
       const state = ctx.getState();
       ctx.setState(
            patch({
                sidebarState: !state.sidebarState,
            })
        );
    }
}