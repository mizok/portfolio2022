import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.scss']
})
export class PersonalityComponent implements OnInit {
  @Input() title = 'What Kind of Person am I?';
  @Input() personalities: { img: string, title: string, content: string }[] = [
    {
      img: 'assets/images/intj.png',
      title: 'INTJ',
      content: `The result of my 16 personalities test is INTJ(專家型). INTJs apply (often ruthlessly) the
      criterion "Does it work?" to everything from their own research efforts to the prevailing
      social norms.`
    },
    {
      img: 'assets/images/introvert.png',
      title: 'INTROVERT',
      content: `Yup, actually i am kinda shy guy, but I've never regard my
      shyness as a flaw. As an
      introvert person, I am much more sensitive to emotional things, and I always prefer to make
      a plan comprehensively before any action.`
    },
    {
      img: 'assets/images/sincere.png',
      title: 'SINCERE',
      content: `I won't say that I have never cheated, but I do hate to
      cheat. I am always proud of my
      honesty, I tend to treat people with a manner of honest and true heart.`
    },
    {
      img: 'assets/images/creative.png',
      title: 'CREATIVE',
      content: `<p>;-)</p>`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
