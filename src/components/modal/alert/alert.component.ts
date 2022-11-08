import { CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ComponentRef, EmbeddedViewRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkPortalOutlet, { static: false }) portalOutlet!: CdkPortalOutlet;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.portalOutlet, 'asdasdsa');
  }


  /**
   * attach component on outlet
   *
   * @param {ComponentPortal<T>} portal
   * @returns {ComponentRef<T>}
   * @memberof PopupComponent
   */
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this.portalOutlet.attachComponentPortal(portal);
  }


  /**
   * attach template on outlet
   *
   * @param {TemplatePortal<T>} portal
   * @returns {EmbeddedViewRef<T>}
   * @memberof PopupComponent
   */
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this.portalOutlet.attachTemplatePortal(portal);
  }

}
