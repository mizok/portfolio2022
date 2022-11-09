import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  active = false;
  @Output('scroll') scroll = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.active = !this.active;
  }

  onScroll(event: Event) {
    this.scroll.emit(event);
  }

}
