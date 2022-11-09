import { CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ComponentRef, EmbeddedViewRef, EventEmitter, HostBinding, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @HostBinding('style.width') get widthStyle() { return this.width };

  @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet!: CdkPortalOutlet;

  animationState: EventEmitter<AnimationEvent> = new EventEmitter();
  afterClickClose: EventEmitter<null> = new EventEmitter();

  state: 'enter' | 'void' | 'exit' = 'enter';
  width: string = '744px';
  id: string = '';

  hasCloseIcon: boolean = true;
  backdropClick: boolean = false;
  customPopupClass: string = '';


  constructor() {

  }

  ngOnInit(): void {
    return
  }

  /**
   * 動畫開始
   *
   * @param {AnimationEvent} event
   * @memberof PopupComponent
   */
  animationStart(event: AnimationEvent) {
    this.animationState.emit(event);
  }


  /**
   * 動畫結束
   *
   * @param {AnimationEvent} event
   * @memberof PopupComponent
   */
  animationEnd(event: AnimationEvent) {
    this.animationState.emit(event);
  }

  /**
   * 點擊關閉
   *
   * @memberof PopupComponent
   */
  onClickClose() {
    this.afterClickClose.emit();
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
