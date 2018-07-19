import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="jumbotron">
  <div class="row">
    <h1>You can contact us here...</h1>
  </div>
</div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
  }
  h1 {
    color: royalblue;

  }

`
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
