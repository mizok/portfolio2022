import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { debounceTime, fromEvent, Observable } from 'rxjs';

@Directive({
  selector: '[appFullHeight]'
})
export class FullHeightDirective implements OnInit {
  @Input() minHeight: number = 0;
  @Input() maxHeight: number = 0;
  $resize!: Observable<any>
  constructor(private ele: ElementRef) {

  }

  ngOnInit(): void {
    this.syncHeight();
    this.bindWindowResize();
  }

  syncHeight() {
    let height = window.innerHeight > this.minHeight ? window.innerHeight : this.minHeight;
    height = window.innerHeight > this.maxHeight ? this.maxHeight : window.innerHeight;
    this.ele.nativeElement.style.height = height + 'px';
  }

  bindWindowResize() {
    this.$resize = fromEvent(window, 'resize').pipe(debounceTime(200));
    this.$resize.subscribe(() => {
      this.syncHeight();
    })
  }
}
