import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      Currently being sold by Aaron Rodgers, id {{sellerID}}
    </p>
  `,
  styles: [`
  :host { background: yellow;}
`]
})
export class SellerInfoComponent implements OnInit {

  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
