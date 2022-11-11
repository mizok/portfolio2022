import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { DirectivesModule } from '@directives'
@NgModule({
  declarations: [
    SideMenuComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
