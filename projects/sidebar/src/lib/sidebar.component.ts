import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lht-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  @Output() expandSideNav = new EventEmitter();

  @Output() hideSideNav = new EventEmitter();

  isShowingSideNav: boolean = false;

  constructor() {}

  toggleSideNav() {
    this.isShowingSideNav = !this.isShowingSideNav;
    this.expandSideNav.emit(this.isShowingSideNav);
  }

  onHideSideNav() {
    this.isShowingSideNav = false;
    this.hideSideNav.emit();
  }
}
