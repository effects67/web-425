import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container-fluid">
  <div class="row">
    <h1>Country roads, take me hoooooooooome!</h1>
  </div>
</div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
  }
  h1 {
    color: hotpink;
  }
`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
