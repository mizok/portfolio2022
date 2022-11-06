import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import * as Masonry from 'masonry-layout';
import * as imagesloaded from 'imagesloaded';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('grid') gridEle!: ElementRef;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;
  folios: { title: string, img: string, repoLink: string, pageLink: string }[] = [
    {
      title: '3D-Cube-Chat',
      img: 'assets/images/folio-1.png',
      repoLink: '',
      pageLink: ''
    },
    {
      title: 'Cannon',
      img: 'assets/images/folio-2.png',
      repoLink: '',
      pageLink: ''
    },
    {
      title: 'Universe',
      img: 'assets/images/folio-3.png',
      repoLink: '',
      pageLink: ''
    },
    {
      title: 'Tower',
      img: 'assets/images/folio-4.png',
      repoLink: '',
      pageLink: ''
    },

  ];
  timelineDatas: { title: string, url: string, img: string, time: string }[] = [
    {
      title: '新光銀行官網維護',
      url: '文字',
      time: '2018',
      img: 'assets/images/logo-skBank.png'
    },
    {
      title: '台新銀行官網重建',
      url: '文字',
      time: '2018',
      img: 'assets/images/logo-tsBank.png'
    },
    {
      title: '新光醫院官網建置',
      url: '文字',
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
      url: '文字',
      time: '2020',
      img: 'assets/images/logo-neux.svg'
    },
    {
      title: '新光金控官網重建',
      url: '文字',
      time: '2021',
      img: 'assets/images/logo-skFinancial.png'
    },
    {
      title: '元富證券官網重建',
      url: '文字',
      time: '2021',
      img: 'assets/images/logo-masterlink.svg'
    }
  ]
  private msnryInstance!: Masonry;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.gridify();
    this.syncTimelineHeight();
  }

  gridify() {
    const gridEle = this.gridEle.nativeElement;
    imagesloaded(gridEle, () => {
      this.msnryInstance = new Masonry(gridEle, {
        // options
        itemSelector: '.porfolio-grid__cell',
        resize: true,
        gutter: 10,
      });
    })
  }

  syncTimelineHeight() {
    this.timelineItems.toArray().forEach((o) => {
      let height = 0;
      const squares = (o.nativeElement as HTMLElement).querySelectorAll('.porfolio-timeline__square');
      squares.forEach((square) => {
        const squareHeight = (square as HTMLElement).offsetHeight;
        if (squareHeight >= height) {
          height = squareHeight;
        }
      })
      squares.forEach((square) => {
        (square as HTMLElement).style.height = height.toString() + 'px';
      })
    })
  }
}
