import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="jumbotron">
      <div class="row">
        <h3>There's no place like home...</h3>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px; 
    }
    h3 {
      color: olive;
    }
  `
  ]
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
