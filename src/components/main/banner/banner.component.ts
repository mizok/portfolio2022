import { Component, ViewChild, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { FullHeightDirective } from '@directives';
import { BannerAnimation } from './animation';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {
  animationInstance!: BannerAnimation;
  @ViewChild('banner') banner!: ElementRef;
  @ViewChild(FullHeightDirective, { static: true }) fullHeightDirective!: FullHeightDirective;
  constructor() { }

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation() {
    this.animationInstance = new BannerAnimation(this.banner.nativeElement)
    this.fullHeightDirective.$resize.subscribe(() => {
      this.animationInstance.sizing();
    })
  }

}
