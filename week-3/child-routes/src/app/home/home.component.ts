import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <h1>
      Home on the range
    </h1>
  </div>
  `,
  styles: [ `
  .container {
    margin-top: 30px; 
  }
  h1 {
    color: cyan;
  }
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
