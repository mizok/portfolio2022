import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() title = "I'm Glad to Introduce Myself."
  @Input() headTitle = 'Introduction';
  @Input() headContent = `I’m just human, I have weakness, I make mistakes and I experience sadness; But I learn from
  all these things to make me a better person.`;
  @Input() contactDataGroup: { title: string, content?: string, url?: string }[] = [
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
      content: 'frontend developer'
    },
    {
      title: 'EMAIL',
      content: 'chern_h@outlook.com'
    },
    {
      title: 'GITHUB',
      url: 'https://github.com/mizok'
    }
  ];
  @Input() skillDataGroup: { title: string, percent: number }[] = [
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
