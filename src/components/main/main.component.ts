import { Component, OnInit, ViewChild } from '@angular/core';
import { PorfolioComponent } from './porfolio/porfolio.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild(PorfolioComponent, { static: true }) porfolioRef!: PorfolioComponent;

  constructor() { }

  ngOnInit(): void {

  }


  layoutScroll() {
    this.porfolioRef.setTimelineScrollProgress();
  }

}
