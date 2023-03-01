import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isShowingSideNav: boolean = false;

  getSideNavData(data: boolean): void {
    this.isShowingSideNav = data;
  }

  hideSideNav(): void {
    this.isShowingSideNav = false;
  }

  showSideNav() {
    this.isShowingSideNav = this.isShowingSideNav ? false : true;
  }
}
