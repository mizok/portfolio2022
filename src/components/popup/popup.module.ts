import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { PopupComponent } from './popup.component';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { MessagePopupComponent } from './message-popup/message-popup.component';



@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
  ],
  declarations: [
    PopupComponent,
    ConfirmPopupComponent,
    MessagePopupComponent,
  ],
  exports: [
    PopupComponent,
    ConfirmPopupComponent,
    MessagePopupComponent,
  ]
})
export class PopupModule { }
