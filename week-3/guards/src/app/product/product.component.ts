import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'product',
  template: `
    <h1 class="product">Product Component</h1>
    <input placeholder="Name" type="text" [formControl]="name">
  `,
  styles: [ `
    .product { backgorund-color: maroon;}
  `]
})
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
