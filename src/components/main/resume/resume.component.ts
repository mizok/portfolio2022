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
  trees: { title: string, img: string, units: unitData[], url?: string }[] = [
    {
      title: 'Education',
      img: 'assets/images/school.svg',
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
      img: 'assets/images/work.svg',
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
    },
    {
      title: 'Competition',
      img: 'assets/images/work.svg',
      units: [
        {
          positionTitle: 'it邦幫忙鐵人賽',
          positionDescrp: '2021',
          unitTitle: '成為Canvas Ninja ! ~ 理解2D渲染的精髓',
          unitDescrp: '整體規劃是要探討canvas 的2D渲染環境在實務上的各種運用, 例如如何使用canvas 創建web端2D粒子系統等多種特效模擬的探究。'
        },
        {
          positionTitle: 'it邦幫忙鐵人賽',
          positionDescrp: '2022',
          unitTitle: 'Three.js 學習日誌',
          unitDescrp: '記錄自己從只有2D rendering 基礎，到學會Three.js的過程日誌。'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
