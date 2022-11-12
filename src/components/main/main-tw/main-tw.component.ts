import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-main-tw',
  templateUrl: './main-tw.component.html',
  styleUrls: ['./main-tw.component.scss']
})
export class MainTwComponent implements OnInit {
  @ViewChild(PortfolioComponent, { static: true }) portfolioRef!: PortfolioComponent;
  menuItems = [
    'about',
    'personality',
    'portfolio',
    'resume',
    'contribute',
    'contact'
  ]

  aboutTitle = '很榮幸能夠介紹我自己';
  aboutHeadTitle = '';
  aboutHeadContent = `我只是個平凡人類，有著各種弱點，我會犯錯，也會感到悲傷； 但這一切的一切最終讓經歷了它們的我成為了更好的人`;
  aboutContactDataGroup = [
    {
      title: '全名',
      content: '黃廣誠 KUANG-CHENG HUANG'
    },
    {
      title: '生日',
      content: 'August 28, 1990'
    },
    {
      title: '目前職稱',
      content: '前端工程師'
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

  portfolioTitle1 = '這裡有一些我的日常作品';
  portfolioDescrp1 = `身為一個具備美術教育背景的前端工程師，我特別愛好研究網頁3D體驗/生成式藝術的相關領域。<br>我使用的技術相當的多樣化，包含Three.js/P5.js/Webgl/blender/after
  effects,...等，我都曾有使用它們來進行創作的案例。<br>以目前來講，我把這個領域的相關研究看作是一種興趣，同時也還沒有計畫把這些技術投入工作使用。`

  portfolioDescrp2 = `這裡則是一些我在現公司曾經參與過的專案，但我沒有權力可以公開這部分專案的源碼，您可以針對您感興趣的部分稍作檢視`

  portfolioFolios: { title: string, img: string, repoLink: string, pageLink: string, show?: boolean }[] = [
    {
      title: '3D-Cube-Chat',
      img: 'assets/images/folio-1.png',
      repoLink: 'https://github.com/mizok/3d-Cube-Chat',
      pageLink: 'https://mizok.github.io/3d-Cube-Chat/'
    },
    {
      title: 'Cannon',
      img: 'assets/images/folio-2.png',
      repoLink: 'https://github.com/mizok/three-js-playground/tree/master/src/examples/ex17-1',
      pageLink: 'https://threejs-demo-brown.vercel.app/#ex17-1'
    },
    {
      title: 'Tower',
      img: 'assets/images/folio-3.png',
      repoLink: 'https://github.com/mizok/three-js-playground/tree/master/src/examples/ex12',
      pageLink: 'https://threejs-demo-brown.vercel.app/#ex12'
    },
    {
      title: 'Universe',
      img: 'assets/images/folio-4.png',
      repoLink: 'https://github.com/mizok/generative-art-playground/tree/master/src/examples/universe-beta',
      pageLink: 'https://mizok.github.io/generative-art-playground/#universe-beta'
    },

  ];
  portfolioTimelineDatas: { title: string, url: string, img: string, time: string }[] = [
    {
      title: '新光銀行官網維護',
      url: 'https://www.skbank.com.tw/',
      time: '2018',
      img: 'assets/images/logo-skBank.png'
    },
    {
      title: '台新銀行官網重建',
      url: 'https://www.taishinbank.com.tw/',
      time: '2018',
      img: 'assets/images/logo-tsBank.png'
    },
    {
      title: '新光醫院官網建置',
      url: 'https://www.skh.org.tw/skh/index.html',
      time: '2019',
      img: 'assets/images/logo-skHospital.png'
    },
    {
      title: '誠品全球官網前台建置',
      url: 'https://www.eslitecorp.com/eslite/index.jsp',
      time: '2019',
      img: 'assets/images/logo-eslite.png'
    },
    {
      title: '新逸資訊公司官網重建',
      url: 'https://www.neux.com.tw/',
      time: '2020',
      img: 'assets/images/logo-neux.svg'
    },
    {
      title: '新光金控官網重建',
      url: 'https://www.skfh.com.tw/',
      time: '2021',
      img: 'assets/images/logo-skFinancial.png'
    },
    {
      title: '元富證券官網重建',
      url: 'https://www.masterlink.com.tw/',
      time: '2021',
      img: 'assets/images/logo-masterlink.svg'
    }
  ]


  personalityTitle = '我的人格特質';
  personalityPersonalities: { img: string, title: string, content: string }[] = [
    {
      img: 'assets/images/intj.png',
      title: 'INTJ',
      content: `我的十六型人格測試結果是INTJ(專家型)，INTJ被稱為類型中的「系統建造者」，他們具有特殊的特質組合，也就是「想像力」和「務實性」。`
    },
    {
      img: 'assets/images/introvert.png',
      title: '內向思維',
      content: `對，我的個性比較內向，但我從來不把這個特點當作是一種缺陷。身為一個內向者，我能夠更好的感知情緒，也習慣在做出行動前多加考慮。`
    },
    {
      img: 'assets/images/sincere.png',
      title: '老實忠厚',
      content: `我不會說我從來沒有作弊，但我很討厭這麼做，我為我自己的這個特質感到自豪，我傾向於以誠實和真誠的心對待人。`
    },
    {
      img: 'assets/images/creative.png',
      title: '具備創意',
      content: `<p>;-)</p>`
    }
  ]


  resumeTitle = '我的經歷';
  resumeTrees = [
    {
      title: '學歷背景',
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
      title: '工作經歷',
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
      title: '競賽經驗',
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


  contributeTitle = '我能為您做到什麼?';
  contributeContributes: { img: string, title: string, content: string }[] = [
    {
      img: 'assets/images/contribute-frontend.svg',
      title: '前端開發',
      content: '身為一個前端工程師，當然會具有基本的前端技能，例如HTML/CSS/JS/API串接,...etc.'
    },
    {
      img: 'assets/images/contribute-artist.svg',
      title: '技術美術',
      content: '我對於我自己在網頁前端產業的定位比較接近於遊戲產業中的技術美術，儘管在目前的業界並沒有像這樣的職稱。'
    },
    {
      img: 'assets/images/contribute-consultant.svg',
      title: '網頁特效諮詢',
      content: '在我服務過的單位中，我常常提供美術端諮詢並討論如何實作特效內容。<br>除此之外我還很擅長在沒有UIUX精稿的狀態下自行規劃設計與樣式。'
    },
    {
      img: 'assets/images/contribute-library.svg',
      title: '元件庫建置',
      content: '我有豐富的UI元件庫設計/規劃經驗，曾為公司製作過兩套UI元件庫，以供專案開發使用。'
    }
  ]


  contactTitle = `期待能夠收到您的回音`;
  contactFormGuide = {
    name: {
      title: '您的姓名*',
      error: '請填寫姓名'
    },
    email: {
      title: 'Email*',
      error1: '請填寫Email',
      error2: 'Email格式錯誤'
    },
    subject: {
      title: '主旨*',
      error: '請填寫主旨'
    },
    message: {
      title: '請輸入您的訊息'
    }
  }
  contactFormSubmitError = `您送出的表單中有缺漏或無效的部分，<br>煩請確認補填後重新發送。`;
  contactFormSubmitMessage = `感謝您的回覆，<br>您將在五分鐘內於您的信箱中收到確認回覆通知。`;

  constructor() { }

  ngOnInit(): void {

  }


  layoutScroll() {
    this.portfolioRef.setTimelineScrollProgress();
  }

}
