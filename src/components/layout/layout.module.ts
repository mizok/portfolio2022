import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { DirectivesModule } from '@directives';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    SideMenuComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
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
