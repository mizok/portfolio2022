import { PopupRef } from "./popup-ref";

export class PopupBase<T, R> {
  private popupRef!: PopupRef<T, R>;

  protected close(returnValue?: R) {
    this.popupRef.close(returnValue);
  }
}