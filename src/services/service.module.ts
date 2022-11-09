import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact/contact.service';
import { PopupService } from './popup/popup.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
@NgModule({
  providers: [
    ContactService,
    PopupService
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ]
})
export class ServiceModule { }
