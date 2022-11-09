import { OverlayRef } from "@angular/cdk/overlay";
import { PopupComponent } from "./popup.component";
import { v4 as uuid } from 'uuid';
import { Observable, Subject } from "rxjs";
import { filter, take, tap } from "rxjs/operators";

export class PopupRef<T, R = any> {

  contentComponentInstance: T | unknown = null;

  private afterShow$: Subject<null> = new Subject();
  private afterHide$: Subject<R | undefined> = new Subject();
  private isOpen: boolean = true;
  private result: R | undefined;
  private id: string = `popup-${uuid()}`;

  constructor(
    private overlatRef: OverlayRef,
    public componentInstance: PopupComponent
  ) {

    componentInstance.id = this.id;

    componentInstance.animationState.pipe(
      filter(event => event.type === 'animationend'),
      take(1)
    ).subscribe(() => {
      this.afterShow$.next(null);
      this.afterShow$.complete();
    });


    componentInstance.afterClickClose.pipe(take(1)
    ).subscribe(() => {
      this.close();
    });

    overlatRef.detachments().subscribe(() => {
      this.afterHide$.next(this.result);
      this.afterHide$.complete();
      this.contentComponentInstance = null;
      overlatRef.dispose();
    });

    overlatRef.backdropClick().pipe(
      filter(() => componentInstance.backdropClick),
      tap(() => this.close())
    ).subscribe();
  }


  /**
   * 關掉popup
   *
   * @param {R} [popupResult]
   * @memberof PopupRef
   */
  close(popupResult?: R) {
    this.result = popupResult;
    this.finishPopupClose();
  }


  /**
   * 完全關掉popup
   * detach portal on overlay
   *
   * @memberof PopupRef
   */
  finishPopupClose() {
    this.isOpen = false;
    this.overlatRef.detach();
  }


  /**
   * get an observable when popup show
   *
   * @returns {Observable<null>}
   * @memberof PopupRef
   */
  afterShow(): Observable<null> {
    return this.afterShow$.asObservable();
  }


  /**
   * get an observable when popup hide
   *
   * @returns {(Observable<R | undefined>)}
   * @memberof PopupRef
   */
  afterHide(): Observable<R | undefined> {
    return this.afterHide$.asObservable();
  }
}