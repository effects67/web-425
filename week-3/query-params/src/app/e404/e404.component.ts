import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container-fluid">
      <div class="row">
        <h1>404 - Page Not Found</h1>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px; 
    }
    h1 {
      color: maroon;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
