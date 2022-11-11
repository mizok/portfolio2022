import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { scrollOptions, overscrollOptions } from '@util/function'
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { gsap, Linear } from 'gsap';
import { SideMenuComponent } from './side-menu/side-menu.component';

Scrollbar.use(OverscrollPlugin);




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

class DisableScrollPlugin extends ScrollbarPlugin {
  static override pluginName = 'disableScroll';

  static override defaultOptions = {
    direction: '',
  };

  override transformDelta(delta: any) {
    if (this.options.direction) {
      delta[this.options.direction] = 0;
    }

    return { ...delta };
  }
}

// load the plugin
Scrollbar.use(DisableScrollPlugin);



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
        ...scrollOptions,
        delegateTo: document,
        plugins: {
          overscroll: { ...overscrollOptions },
          disableScroll: {
            direction: 'x',
          },
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
