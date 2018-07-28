import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="jumbotron">
      <h1>Product details for {{productId}}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">
      Who is selling this product that I obviously need?</a></p>
    </div>
  `,
  styles: [ `
    h1 {
      color: silver;
    }
  `
  ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 23789405;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
