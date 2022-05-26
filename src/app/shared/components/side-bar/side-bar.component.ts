import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../redux/redux.state';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {
  
  public sidebarState: boolean = true;

  @Select(AppState.getSidebarState)
  sidebarState$!: Observable<boolean>;
  unsubscribe?: Subscription;
  constructor() {
    this.unsubscribe = this.sidebarState$.subscribe((data) => {
      this.sidebarState = data;
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
