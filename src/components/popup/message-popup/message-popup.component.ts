import { Component, Inject, OnInit } from '@angular/core';
import { PopupBase } from '../popup-base';
import { POPUP_DATA } from '../popup-config';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.scss']
})
export class MessagePopupComponent extends PopupBase<MessagePopupComponent, null> implements OnInit {

  message: string = '';

  constructor(@Inject(POPUP_DATA) data: any) {
    super();
    this.message = data?.message || this.message;
  }

  ngOnInit(): void {
  }

  onClickClose() {
    this.close();
  }
}
