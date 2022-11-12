import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() lang: 'CHINESE' | 'ENGLISH' = 'ENGLISH';
  targetPath!: string;
  constructor() { }

  ngOnInit(): void {
    this.setTargetPath();
  }

  setTargetPath() {
    this.targetPath = this.lang === 'CHINESE' ? '/zh-tw' : '/en';
  }

}
