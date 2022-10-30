import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LayoutModule } from '../layout';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
