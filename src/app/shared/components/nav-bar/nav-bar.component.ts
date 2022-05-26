import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SidebarChange } from '../../redux/redux.actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public store: Store) { }

  ngOnInit(): void {
  }


  collapseSidebar(event: Event): void {
    event.preventDefault();
    this.store.dispatch(new SidebarChange());
  }
}
