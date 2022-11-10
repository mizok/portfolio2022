import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullHeightDirective } from './full-height.directive';



@NgModule({
  declarations: [
    FullHeightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullHeightDirective
  ]
})
export class DirectivesModule { }
