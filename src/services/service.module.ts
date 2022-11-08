import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';
import { ModalService } from './modal.service'
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  providers: [
    ContactService,
    ModalService
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ]
})
export class ServiceModule { }
