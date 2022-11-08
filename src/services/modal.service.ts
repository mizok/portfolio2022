import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { AlertComponent } from '@components/modal/alert/alert.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private overlayRef: OverlayRef;
  constructor(
    private overlay: Overlay
  ) {
    this.overlayRef = this.overlay.create()
  }
  alert(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    const alertPortal = new ComponentPortal(AlertComponent)
    const alertComponentRef = this.overlayRef.attach(alertPortal);
    alertComponentRef.instance.attachTemplatePortal(new TemplatePortal(templateRef, viewContainerRef));
  }
}
