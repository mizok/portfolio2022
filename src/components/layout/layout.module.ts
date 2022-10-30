import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
