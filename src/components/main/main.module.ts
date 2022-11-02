import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LayoutModule } from '../layout';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    MainComponent,
    BannerComponent
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
