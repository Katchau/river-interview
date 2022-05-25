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

  @Select(AppState.getRecentGames)
  recentGames$!: Observable<Game[]>;
  unsubscribe?: Subscription;

  constructor() { 
    this.unsubscribe = this.recentGames$.subscribe((data) => {
      console.log(data);
      this.recentGames = data
      // this should be on its own service to do these methods, as to not scatter these around the code
      localStorage.setItem("recentGames", JSON.stringify(this.recentGames))
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
  }

}
