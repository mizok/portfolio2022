import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { gsap, Linear } from 'gsap';
import { SideMenuComponent } from './side-menu/side-menu.component';

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

class StopperPlugin extends ScrollbarPlugin {
  static override  pluginName = 'stopper';
  static override defaultOptions = {
    open: false,
  };
  override transformDelta(delta: any) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

/* OverscrollPlugin */
Scrollbar.use(StopperPlugin);


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  active = false;
  @Output('scroll') scroll = new EventEmitter();
  @ViewChild('scrollBox') private scrollBox!: ElementRef;
  @ViewChild('inner') private inner!: ElementRef;
  @ViewChild('side') private side!: SideMenuComponent;
  scrollbar !: Scrollbar;
  private sideSize: number = 0;

  @Input() menuItems: string[] = [];
  constructor() { }
  ngAfterViewInit(): void {
    this.initScroll();
    this.getSideSize();
  }

  getSideSize() {
    const sideEle = this.side.eleRef.nativeElement as HTMLElement;
    this.sideSize = sideEle.getBoundingClientRect().width;

  }

  toggle(status?: boolean) {
    let dummy: any;
    const prm = new Promise((res) => {
      dummy = res;
    })
    this.active = status !== undefined ? status : !this.active;
    this.scrollbar.updatePluginOptions('stopper', { open: this.active });
    if (this.active) {
      gsap.to(this.inner.nativeElement, {
        x: 0, duration: 0.3, ease: Linear.easeInOut, onComplete: () => {
          dummy();
        }
      });
    }
    else {
      gsap.to(this.inner.nativeElement, {
        x: -this.sideSize, duration: 0.3, ease: Linear.easeInOut, onComplete: () => {
          dummy();
        }
      });
    }
    return prm;
  }

  initScroll() {

    this.scrollbar = Scrollbar
      .init(this.scrollBox.nativeElement as HTMLElement, {
        ...options,
        delegateTo: document,
        plugins: {
          overscroll: { ...overscrollOptions },
        },
      })

    this.scrollbar.addListener((status) => {
      this.scroll.emit(status);
    })

  }

  scrollTo(anchorName: string) {
    const targetEle = document.querySelector(`#${anchorName}`) as HTMLElement;
    const offsetTop = targetEle.getBoundingClientRect().top;
    this.toggle(false).then(() => {
      this.scrollbar.scrollTo(0, offsetTop + this.scrollbar.scrollTop, 2000)
    })
  }

}
