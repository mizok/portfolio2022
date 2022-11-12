import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {
  @Input() title = 'What Can I Do For You?';
  @Input() contributes: { img: string, title: string, content: string }[] = [
    {
      img: 'assets/images/contribute-frontend.svg',
      title: 'Frontend Developer',
      content: 'As a front-end engineer, of course, I have basic frontend skills, such as HTML/CSS/JS/API chaining,...etc. <br>And by the way, framework I use the most is Angular'
    },
    {
      img: 'assets/images/contribute-artist.svg',
      title: 'Technical<br>Artist',
      content: 'My positioning in the front-end web industry is closer to that of technical art in the game industry, although there is no such title in the current industry.'
    },
    {
      img: 'assets/images/contribute-consultant.svg',
      title: 'Web FX Consultant',
      content: "In the conpanies I've worked for, I've often provided art-side consultation and discussed how to implement special web fx content."
    },
    {
      img: 'assets/images/contribute-library.svg',
      title: 'Components Library',
      content: 'I have a bunch of experience in UI component library design/planning, and have produced two sets of UI component libraries for project development usage.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
