import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="jumbotron">
  <div class="row">
    <h1>This is the about page, so now you know what the about page is about.</h1>
  </div>
</div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
  }
  h1 {
    color: limegreen;
  }
`
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
