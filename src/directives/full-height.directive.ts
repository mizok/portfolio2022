import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { debounceTime, fromEvent, Observable } from 'rxjs';

@Directive({
  selector: '[appFullHeight]'
})
export class FullHeightDirective implements OnInit {
  @Input() minHeight: number = 0;
  $resize!: Observable<any>
  constructor(private ele: ElementRef) {

  }

  ngOnInit(): void {
    this.syncHeight();
    this.bindWindowResize();
  }

  syncHeight() {
    const height = window.innerHeight > this.minHeight ? window.innerHeight : this.minHeight;
    this.ele.nativeElement.style.height = height + 'px';
  }

  bindWindowResize() {
    this.$resize = fromEvent(window, 'resize').pipe(debounceTime(200));
    this.$resize.subscribe(() => {
      this.syncHeight();
    })
  }
}
