import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
  
    <h1 class="home">You must log in...</h1>
    
  `,
  styles: [`
    .home { background-color: yellow; }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
