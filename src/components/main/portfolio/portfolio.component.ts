import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, HostListener, Input } from '@angular/core';
import * as Masonry from 'masonry-layout';
import * as imagesloaded from 'imagesloaded';
import { gsap } from 'gsap';
import { debounceTime, fromEvent } from 'rxjs'
import { scrollOptions, overscrollOptions, childOf } from '@util/function'
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('grid') gridEle!: ElementRef;
  @ViewChildren('gridCell') gridCells!: QueryList<ElementRef>;
  @ViewChild('timeline') timeline!: ElementRef;
  @ViewChild('timelineContainer') timelineContainer!: ElementRef;
  @ViewChild('mobileTimelineContainer') mobileTimelineContainer!: ElementRef;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;
  timelineContainerScrollbar?: Scrollbar;

  @Input() title1 = 'Here are Some of My Works.';
  @Input() descrp1 = `As a FE with art related education, I love to create Web 3D Experiance/ Generative Art releated
  works.<br>
  The techniques I use are quite diverse, including Three.js/P5.js/Webgl/blender/after
  effects,...etc.<br>
  At present, I treat the technology in this field as a hobby, whcih means I have no plan to use these
  techniques in jobs.`
  @Input() descrp2 = `Here are also some projects which I participated during recent jobs.<br>But I have no
  right to show you the source code, just take a look if you are interested.`

  @Input() folios: { title: string, img: string, repoLink: string, pageLink: string, show?: boolean }[] = [
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
  @Input() timelineDatas: { title: string, url: string, img: string, time: string }[] = [
    {
      title: 'Official Site Maintenance',
      url: 'https://www.skbank.com.tw/',
      time: '2018',
      img: 'assets/images/logo-skBank.png'
    },
    {
      title: 'Official Site Rebuild',
      url: 'https://www.taishinbank.com.tw/',
      time: '2018',
      img: 'assets/images/logo-tsBank.png'
    },
    {
      title: 'Official Site Rebuild',
      url: 'https://www.skh.org.tw/skh/index.html',
      time: '2019',
      img: 'assets/images/logo-skHospital.png'
    },
    {
      title: 'UIUX Project Frontend',
      url: 'https://www.eslitecorp.com/eslite/index.jsp',
      time: '2019',
      img: 'assets/images/logo-eslite.png'
    },
    {
      title: 'Official Site Rebuild',
      url: 'https://www.neux.com.tw/',
      time: '2020',
      img: 'assets/images/logo-neux.svg'
    },
    {
      title: 'Official Site Rebuild',
      url: 'https://www.skfh.com.tw/',
      time: '2021',
      img: 'assets/images/logo-skFinancial.png'
    },
    {
      title: 'Official Site Rebuild',
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
    this.bindResize();
    this.setTimelineContainerScroll()
  }

  gridify() {
    const gridEle = this.gridEle.nativeElement;
    imagesloaded(gridEle, () => {
      this.msnryInstance = new Masonry(gridEle, {
        // options
        itemSelector: '.portfolio-grid__cell',
        resize: true,
        gutter: 10,
      });
    })
  }

  bindResize() {
    fromEvent(window, 'resize').pipe(debounceTime(200)).subscribe(() => {
      this.setTimelineScrollProgress();
    });
  }

  showGuide(index: number) {
    this.folios.filter((o, i) => i !== index).forEach((o) => {
      o.show = false;
    })
    this.folios[index].show = true;
  }

  @HostListener('document:touchend', ['$event'])
  clearShow(ev: Event) {
    const targetIsGrid = this.gridCells.toArray().filter((o) => {
      return childOf(ev.target, o.nativeElement)
    }).length > 0;
    if (targetIsGrid) return;
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

  setTimelineContainerScroll() {
    const container = this.mobileTimelineContainer.nativeElement as HTMLElement;
    this.timelineContainerScrollbar = Scrollbar
      .init(container as HTMLElement, {
        ...scrollOptions,
        plugins: {
          overscroll: { ...overscrollOptions },
        },
      })
  }
}
