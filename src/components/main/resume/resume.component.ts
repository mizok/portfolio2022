import { Component, OnInit } from '@angular/core';
interface unitData {
  positionTitle: string,
  positionDescrp: string,
  unitTitle: string,
  unitDescrp: string
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  trees: { title: string, units: unitData[] }[] = [
    {
      title: 'Education',
      units: [
        {
          positionTitle: '大學',
          positionDescrp: '2013',
          unitTitle: '成功大學 NCKU 土木工程學系',
          unitDescrp: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字'
        },
        {
          positionTitle: '研究所',
          positionDescrp: '2017',
          unitTitle: '輔仁大學 FJU 應用美術所',
          unitDescrp: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字'
        }
      ]
    }, {
      title: 'Work Experience',
      units: [
        {
          positionTitle: '前端設計(實習)',
          positionDescrp: '2016',
          unitTitle: '山川久也設計股份有限公司',
          unitDescrp: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字'
        },
        {
          positionTitle: '前端工程師',
          positionDescrp: '2018',
          unitTitle: '人宇數位科技',
          unitDescrp: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字'
        },
        {
          positionTitle: '前端工程師',
          positionDescrp: '2018~',
          unitTitle: '新逸資訊科技',
          unitDescrp: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
