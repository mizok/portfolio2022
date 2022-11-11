import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { BannerAnimation } from './animation';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {
  animationInstance!: BannerAnimation;
  @ViewChild('banner') banner!: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation() {
    this.animationInstance = new BannerAnimation(this.banner.nativeElement)
    fromEvent(window, 'resize').subscribe(() => {
      this.animationInstance.sizing();
    })
  }

}
