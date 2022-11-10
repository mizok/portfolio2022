import { Component, EventEmitter, Input, OnInit, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() items: string[] = [];
  @Output() navigate = new EventEmitter();
  constructor(public eleRef: ElementRef) { }

  ngOnInit(): void {
  }

  navigateListener(event: Event, anchorName: string) {
    event.preventDefault();
    this.navigate.emit(anchorName)
  }

}
