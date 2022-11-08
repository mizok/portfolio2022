import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    PortalModule
  ]
})
export class ModalModule { }
