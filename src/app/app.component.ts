import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FieldConfig } from './models/field-config';
import { navItems } from './models/navigation-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShowingSideNav!: boolean;

  navItems: FieldConfig[] = navItems;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  getSideNavData(data: boolean) {
    this.isShowingSideNav = data;
  }

  hideSideNav() {
    this.isShowingSideNav = false;
  }
}
