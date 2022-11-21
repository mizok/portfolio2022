import { Component, Input, OnInit } from '@angular/core';
interface unitData {
  positionTitle: string,
  positionDescrp: string,
  unitTitle: string,
  unitDescrp: string,
  url?: string
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input() title = 'More of My Credentials.';
  @Input() trees: { title: string, img: string, units: unitData[], }[] = [
    {
      title: 'Education',
      img: 'assets/images/school.svg',
      units: [
        {
          positionTitle: 'University',
          positionDescrp: '2008~2013',
          unitTitle: 'Department of Civil Engineering, NCKU',
          unitDescrp: 'I studied in the Department of Civil Engineering in college. The education of the Department of Civil Engineering means the most to me is the knowledge and proficiency in mathematics/physical calculation. This part actually have a great impact on me in the future, especially the details of planning web animations part.'
        },
        {
          positionTitle: 'Master of Fine Arts',
          positionDescrp: '2014~2017',
          unitTitle: 'Department of Applied Arts,Fu Jen Catholic University',
          unitDescrp: 'The reason why I chose to switch from the science group to the art department was because I had a yearning for art/design, and having art/design experience finally gave me the ability and interest orientation which ordinary front-end engineers do not have.'
        }
      ]
    }, {
      title: 'Work Experience',
      img: 'assets/images/work.svg',
      units: [
        {
          positionTitle: 'Frontend Design(Intern)',
          positionDescrp: '2016',
          unitTitle: '山川久也設計股份有限公司',
          unitDescrp: 'This company is actually a web design company opened by my senior at Fu Jen Catholic University. I learned some basics of web development during my internship in this company.'
        },
        {
          positionTitle: 'Frontend Developer',
          positionDescrp: '2018',
          unitTitle: '人宇數位科技',
          unitDescrp: 'This company is the company I stayed for half a year after graduation. But unfortunately the company had to lay off all employees due to operational problems.'
        },
        {
          positionTitle: 'Frontend Developer',
          positionDescrp: '2018~',
          unitTitle: '新逸資訊科技(NEUX)',
          unitDescrp: 'So far, I have spent four years at NEUX, and most of my frontend development skills are actually honed in this company.'
        }
      ]
    },
    {
      title: 'Competition',
      img: 'assets/images/competition.svg',
      units: [
        {
          positionTitle: 'iThome ironman',
          positionDescrp: '2021',
          url: 'https://ithelp.ithome.com.tw/users/20136559/ironman/3982',
          unitTitle: 'Become a canvas ninja!',
          unitDescrp: 'The overall planning is to explore the various practical applications of the canvas 2D rendering context, such as how to use canvas to create a web-side 2D particle system and other web fx effects simulations.'
        },
        {
          positionTitle: 'iThome ironman',
          positionDescrp: '2022',
          url: 'https://ithelp.ithome.com.tw/users/20136559/ironman/5676',
          unitTitle: 'Three.js study diary',
          unitDescrp: 'Record my own process of learning three.js'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
