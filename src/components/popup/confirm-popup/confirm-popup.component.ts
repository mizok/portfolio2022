import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PopupBase } from '../popup-base';
import { POPUP_DATA } from '../popup-config';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent extends PopupBase<ConfirmPopupComponent, 'cancel' | 'confirm'> implements OnInit {

  title: string = '標題';
  content: string = '內容';
  cancelBtnText: string = '取消';
  confirmBtnText: string = '確認';

  constructor(@Inject(POPUP_DATA) data: any) {
    super();

    this.title = data.title || this.title;
    this.content = data.content || this.content;
    this.cancelBtnText = data.cancelBtnText || this.cancelBtnText;
    this.confirmBtnText = data.confirmBtnText || this.confirmBtnText;
  }

  ngOnInit(): void {
  }


  /**
   * 點擊取消按鈕
   *
   * @memberof ConfirmPopupComponent
   */
  onCancelClick() {
    this.close('cancel');
  }

  /**
   * 點擊確認按鈕
   *
   * @memberof ConfirmPopupComponent
   */
  onConfirmClick() {
    this.close('confirm');
  }
}
