import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Selector } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Game } from 'src/app/shared';
import { AppState } from 'src/app/shared/redux/redux.state';

@Component({
  selector: 'body-layout-template',
  templateUrl: './body-layout.component.html',
  styleUrls: ['./body-layout.component.scss']
})
export class BodyLayoutComponent implements OnInit, OnDestroy {

  public recentGames: Game[] = [];
  public sidebarState: boolean = true;

  @Select(AppState.getRecentGames)
  recentGames$!: Observable<Game[]>;

  @Select(AppState.getSidebarState)
  sidebarState$!: Observable<boolean>;
  unsubscribers: Subscription[] = [];

  constructor() { 
    this.unsubscribers.push(this.recentGames$.subscribe((data) => {
      this.recentGames = data
      // this should be on its own service to do these methods, as to not scatter these around the code
      localStorage.setItem("recentGames", JSON.stringify(this.recentGames))
    }))
    this.unsubscribers.push(this.sidebarState$.subscribe((data) => {
      this.sidebarState = data
    }))
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribers.forEach((unsub) => {
      unsub.unsubscribe();
    })
  }

}
