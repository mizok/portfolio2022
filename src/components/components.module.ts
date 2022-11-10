import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main';
import { LayoutModule } from './layout'
import { PopupModule } from './popup';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MainModule,
    LayoutModule,
    PopupModule
  ]
})
export class ComponentsModule { }
