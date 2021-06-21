import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';




@NgModule({
  declarations: [NavigationBarComponent, SidebarComponent, TopbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    NavigationBarComponent,
    SidebarComponent,
    TopbarComponent
  ]
})
export class CoreModule { }
