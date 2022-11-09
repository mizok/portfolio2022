import { ComponentType, GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, Injector, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';
import { PopupConfig, POPUP_DATA, PopupRef, PopupComponent } from '@components/popup';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupList: PopupRef<any>[] = [];
  private isBrowser: boolean = true;

  constructor(
    private overlay: Overlay,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * open popup with component or template 
   *
   * @template T
   * @template R
   * @param {ComponentType<T>} component
   * @param {PopupConfig} [popupConfig]
   * @returns {PopupRef<T, R>}
   * @memberof PopupService
   */
  open<T, R>(component: ComponentType<T> | TemplateRef<T>, viewContainerRef: ViewContainerRef, popupConfig?: PopupConfig): (PopupRef<T, R> | undefined) {
    if (!this.isBrowser) return;
    const defaultConfig = new PopupConfig();
    const newConfig = { ...defaultConfig, ...popupConfig };

    const overlayRef = this.createOverlay(newConfig);
    const popupContainer = this.attachPopupContainer(overlayRef, newConfig);
    const popupRef = this.attachPopupContent(component, viewContainerRef, popupContainer, overlayRef, newConfig);
    this.popupList.push(popupRef);
    popupRef.afterHide().subscribe(() => this.removePopUp(popupRef));

    return popupRef;
  }


  /**
   * attach popup container on overlay
   *
   * @param {OverlayRef} overlayRef
   * @param {PopupConfig} config
   * @returns {PopupComponent}
   * @memberof PopupService
   */
  private attachPopupContainer(overlayRef: OverlayRef, config: PopupConfig): PopupComponent {
    const popupPortal = new ComponentPortal(PopupComponent);
    const componentRef = overlayRef.attach<PopupComponent>(popupPortal);
    const componentInstance = componentRef.instance;
    componentInstance.width = config.maxWidth || '';
    componentInstance.hasCloseIcon = config.hasCloseIcon || true;
    componentInstance.backdropClick = config.backdropClick || true;
    componentInstance.customPopupClass = config.customPopupClass || 'custom-popup';
    return componentInstance;
  }


  /**
   * attach popup content on popup container
   *
   * @private
   * @template T
   * @template R
   * @param {ComponentType<T>} component
   * @param {PopupComponent} popupContainer
   * @param {OverlayRef} overlayRef
   * @param {PopupConfig} config
   * @returns {PopupRef<T, R>}
   * @memberof PopupService
   */
  private attachPopupContent<T, R = any>(component: ComponentType<T> | TemplateRef<T>, viewContainerRef: ViewContainerRef, popupContainer: PopupComponent, overlayRef: OverlayRef, config: PopupConfig): PopupRef<T, R> {
    const popupRef = new PopupRef<T, R>(overlayRef, popupContainer);
    const injector = this.createInjector(config);
    let contentRef: any;

    if (component instanceof TemplateRef) {
      const templatePortal = new TemplatePortal(component, viewContainerRef, config.data);
      contentRef = popupContainer.attachTemplatePortal(templatePortal);
    } else {
      const componentPortal = new ComponentPortal(component, viewContainerRef, injector);
      contentRef = popupContainer.attachComponentPortal(componentPortal);
      popupRef.contentComponentInstance = contentRef.instance;
      contentRef.instance['popupRef'] = popupRef;
    }

    return popupRef;
  }


  /**
   * 關閉全部popup
   *
   * @memberof PopupService
   */
  closeAll() {
    this.popupList.forEach(popup => {
      popup.close();
    });
  }


  /**
   * 移除popup
   *
   * @param {PopupRef<any>} popupRef
   * @memberof PopupService
   */
  private removePopUp(popupRef: PopupRef<any>) {
    const index = this.popupList.indexOf(popupRef);

    if (index > -1) {
      this.popupList.splice(index, 1);
    }
  }


  /**
   * create overlay
   *
   * @param {PopupConfig} config
   * @returns {OverlayRef}
   * @memberof PopupService
   */
  private createOverlay(config: PopupConfig): OverlayRef {
    const overlayConfig = new OverlayConfig({
      backdropClass: config.backdropClass,
      hasBackdrop: true,
      panelClass: config.panelClass,
      positionStrategy: this.getPositionStrategy(config),
      scrollStrategy: this.overlay.scrollStrategies.block()
    });

    return this.overlay.create(overlayConfig);
  }


  /**
   * 取得overlay位置定位策略
   *
   * @returns {GlobalPositionStrategy}
   * @memberof PopupService
   */
  private getPositionStrategy(config: PopupConfig): GlobalPositionStrategy {
    const strategy = this.overlay.position().global();

    if (config.horizontalPosition === 'left') {
      strategy.left('0');
    } else if (config.horizontalPosition === 'right') {
      strategy.right('0');
    } else {
      strategy.centerHorizontally();
    }

    if (config.verticalPosition === 'top') {
      strategy.top('0');
    } else if (config.verticalPosition === 'bottom') {
      strategy.bottom('0');
    } else {
      strategy.centerVertically();
    }

    return strategy;
  }


  /**
   * create injector
   *
   * @private
   * @param {PopupConfig} config
   * @returns {Injector}
   * @memberof PopupService
   */
  private createInjector(config: PopupConfig): Injector {
    return Injector.create({
      providers: [
        { provide: POPUP_DATA, useValue: config.data }
      ]
    })
  }
}
