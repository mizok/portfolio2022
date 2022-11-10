import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, HostListener } from '@angular/core';
import * as Masonry from 'masonry-layout';
import * as imagesloaded from 'imagesloaded';
import { gsap } from 'gsap';
import { debounceTime, fromEvent } from 'rxjs'

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('grid') gridEle!: ElementRef;
  @ViewChild('timeline') timeline!: ElementRef;
  @ViewChild('timelineContainer') timelineContainer!: ElementRef;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;
  folios: { title: string, img: string, repoLink: string, pageLink: string, show?: boolean }[] = [
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
  timelineDatas: { title: string, url: string, img: string, time: string }[] = [
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
  private msnryInstance!: Masonry;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.gridify();
    this.syncTimelineHeight();
    this.bindResize();
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

  bindResize() {
    fromEvent(window, 'resize').pipe(debounceTime(200)).subscribe(() => {
      this.setTimelineScrollProgress();
    });
  }

  showGuide(index: number, event: Event) {
    event.stopPropagation();
    this.clearShow();
    this.folios[index].show = true;
  }

  toggleGuide(index: number, event: Event) {
    event.stopPropagation();
    this.folios[index].show = !this.folios[index].show;
  }

  clearGuide(index: number, event: Event) {
    event.stopPropagation();
    this.folios[index].show = false;
  }

  clearShow() {
    this.folios.forEach((o) => {
      o.show = false;
    })
  }

  setTimelineScrollProgress(): void {
    const tl = this.timeline.nativeElement as HTMLElement;
    const tlc = this.timelineContainer.nativeElement as HTMLElement;
    const tlRect = tl.getBoundingClientRect();
    const tlcRect = tlc.getBoundingClientRect();
    const offsetTop = tlRect.top; //from window.innerHeight to 0
    const startGap = 300;
    const progress = (window.innerHeight - offsetTop - startGap) / (innerHeight - startGap);
    if (progress && progress <= 1 && window.innerHeight - offsetTop > startGap) {
      const dist = tlRect.width - tlcRect.width;
      gsap.to(tl, { x: -dist * progress, duration: 1 })
    }
    else if (window.innerHeight - offsetTop <= startGap) {
      gsap.to(tl, { x: 0, duration: 0.75 })
    }

  }
}
