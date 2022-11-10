import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { BannerAnimation } from './animation';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  animationInstance!: BannerAnimation;
  @ViewChild('banner') banner!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation() {
    this.animationInstance = new BannerAnimation()
  }

}
