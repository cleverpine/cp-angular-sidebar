import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
