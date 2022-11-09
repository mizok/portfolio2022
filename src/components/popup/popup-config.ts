import { InjectionToken } from '@angular/core';

export const POPUP_DATA = new InjectionToken<any>('POPUP_DATA_TOKEN');

export class PopupConfig {
  backdropClick?: boolean = false; // 是否可以點擊背景關掉
  fixedWindowHeight?: boolean = false; // 是否固定螢幕高
  hasCloseIcon?: boolean = true; // 是否需要叉叉按鈕
  maxWidth?: string = '744px'; // 彈窗寬度
  data?: any | null; // 任意資料
  customPopupClass?: string | null;//客制popup class name，主要可以調整animation，或者客制容器版面
  panelClass?: string = 'popup-panel';
  backdropClass?: string = 'popup-backdrop';
  iconId?: string = 'close'; // icon id
  verticalPosition?: 'top' | 'bottom' | 'center' = 'center'; // 彈窗定位垂直:置中靠上、靠下
  horizontalPosition?: 'left' | 'right' | 'center' = 'center'; // 彈窗定位水平:置中靠左、靠右
}