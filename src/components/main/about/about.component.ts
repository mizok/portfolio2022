import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  contactDataGroup: { title: string, content: string }[] = [
    {
      title: 'FULLNAME',
      content: '黃廣誠 KUANG-CHENG HUANG'
    },
    {
      title: 'BIRTH DATE',
      content: 'August 28, 1990'
    },
    {
      title: 'JOB',
      content: '前端工程師'
    },
    {
      title: 'EMAIL',
      content: 'chern_h@outlook.com'
    },
    {
      title: 'GITHUB',
      content: 'https://github.com/mizok'
    }
  ];
  skillDataGroup: { title: string, percent: number }[] = [
    {
      title: 'Javascript',
      percent: 80
    },
    {
      title: 'Typescript',
      percent: 75
    }, {
      title: 'three.js',
      percent: 75
    }, {
      title: 'Angular',
      percent: 70
    }, {
      title: 'HTML/SCSS',
      percent: 90
    },
    {
      title: 'Webpack',
      percent: 70
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
