import { Component, OnInit, ViewChild } from '@angular/core';
import { PorfolioComponent } from '../porfolio/porfolio.component';

@Component({
  selector: 'app-main-en',
  templateUrl: './main-en.component.html',
  styleUrls: ['./main-en.component.scss']
})
export class MainEnComponent implements OnInit {
  @ViewChild(PorfolioComponent, { static: true }) porfolioRef!: PorfolioComponent;
  menuItems = [
    'about',
    'personality',
    'porfolio',
    'resume',
    'contribute',
    'contact'
  ]

  constructor() { }

  ngOnInit(): void {

  }


  layoutScroll() {
    this.porfolioRef.setTimelineScrollProgress();
  }

}