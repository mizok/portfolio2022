import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  active = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.active = !this.active;
  }

}
