import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-main-en',
  templateUrl: './main-en.component.html',
  styleUrls: ['./main-en.component.scss']
})
export class MainEnComponent implements OnInit {
  @ViewChild(PortfolioComponent, { static: true }) portfolioRef!: PortfolioComponent;
  menuItems = [
    'about',
    'personality',
    'portfolio',
    'resume',
    'contribute',
    'contact'
  ]

  constructor() { }

  ngOnInit(): void {

  }


  layoutScroll() {
    this.portfolioRef.setTimelineScrollProgress();
  }

}
