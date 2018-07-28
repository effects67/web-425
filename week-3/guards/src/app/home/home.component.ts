import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="jumbotron">
      <h1 class="home">There's snow place like home....</h1>
    </div>
  `,
  styles: [ `
    .home { background:
      linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px,
      linear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px),
      linear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px);
      background-color:#e1ebbd;
      background-size: 128px 128px; }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
