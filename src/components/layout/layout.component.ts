import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

Scrollbar.use(OverscrollPlugin);

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const options = {
  damping: isMobile ? 0.05 : 0.1,
  thumbMinSize: 20,
  renderByPixels: !('ontouchstart' in document),
  alwaysShowTracks: false,
  continuousScrolling: true,
};


const overscrollOptions = {
  enable: true,
  effect: 'glow',
  damping: 0.2,
  maxOverscroll: 150,
  glowColor: '#222a2d',
};

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  active = false;
  @Output('scroll') scroll = new EventEmitter();
  @ViewChild('scrollBox') scrollBox!: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    this.initScroll();
  }

  toggle() {
    this.active = !this.active;
  }

  initScroll() {

    Scrollbar
      .init(this.scrollBox.nativeElement as HTMLElement, {
        ...options,
        delegateTo: document,
        plugins: {
          overscroll: { ...overscrollOptions },
        },
      })
      .addListener((status) => {
        this.scroll.emit(status);
      })

  }

}
