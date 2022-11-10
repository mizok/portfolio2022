import { Component, OnInit } from '@angular/core';
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
  trees: { title: string, img: string, units: unitData[], }[] = [
    {
      title: 'Education',
      img: 'assets/images/school.svg',
      units: [
        {
          positionTitle: '大學',
          positionDescrp: '2009~2013',
          unitTitle: '成功大學 NCKU 土木工程學系',
          unitDescrp: '我在大學念的是土木系，土木系的教育對我最大的意義就是對數學/物理計算的知識與熟練度，這部份其實在日後對我產生很大的影響，尤其是規劃網頁動畫細節的部分。'
        },
        {
          positionTitle: '研究所',
          positionDescrp: '2014~2017',
          unitTitle: '輔仁大學 FJU 應用美術所',
          unitDescrp: '當初之所以會選擇從理組轉換跑道到美術系，是因為心裡有對於美術/設計的嚮往，而這段經歷最終也讓我獲得了一般前端工程師所不具備的能力與興趣導向。'
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
          unitDescrp: '山川久也其實是我在輔仁大學的學長所開設的網頁設計公司，我在這間公司的實習中學會了一些網頁開發的基礎。'
        },
        {
          positionTitle: '前端工程師',
          positionDescrp: '2018',
          unitTitle: '人宇數位科技',
          unitDescrp: '人宇是我畢業後待了半年的公司。當初公司因為營運有狀況，不得不遣散所有員工。'
        },
        {
          positionTitle: '前端工程師',
          positionDescrp: '2018~',
          unitTitle: '新逸資訊科技',
          unitDescrp: '截至目前為止，我已經在新逸資訊科技度過了四個年頭，而我大部分的前端開發技能其實也都是在這間公司所磨練出來的。'
        }
      ]
    },
    {
      title: 'Competition',
      img: 'assets/images/competition.svg',
      units: [
        {
          positionTitle: 'it邦幫忙鐵人賽',
          positionDescrp: '2021',
          url: 'https://ithelp.ithome.com.tw/users/20136559/ironman/3982',
          unitTitle: '成為Canvas Ninja ! ~ 理解2D渲染的精髓',
          unitDescrp: '整體規劃是要探討canvas 的2D渲染環境在實務上的各種運用, 例如如何使用canvas 創建web端2D粒子系統等多種特效模擬的探究。'
        },
        {
          positionTitle: 'it邦幫忙鐵人賽',
          positionDescrp: '2022',
          url: 'https://ithelp.ithome.com.tw/users/20136559/ironman/5676',
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
