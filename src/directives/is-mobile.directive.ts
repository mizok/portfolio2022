import { Directive, ElementRef, OnInit } from '@angular/core';
import { isMobile } from '@util/function';
import { fromEvent, debounceTime } from 'rxjs'

@Directive({
  selector: '[appIsMobile]'
})
export class IsMobileDirective implements OnInit {

  constructor(private ele: ElementRef) { }

  ngOnInit(): void {
    this.doCheck()
  }
  doCheck() {
    if (isMobile) {
      this.ele.nativeElement.classList.add('is-mobile')
    }
  }
}
