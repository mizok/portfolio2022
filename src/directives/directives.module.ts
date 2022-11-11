import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullHeightDirective } from './full-height.directive';
import { IsMobileDirective } from './is-mobile.directive';



@NgModule({
  declarations: [
    FullHeightDirective,
    IsMobileDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullHeightDirective,
    IsMobileDirective
  ]
})
export class DirectivesModule { }
