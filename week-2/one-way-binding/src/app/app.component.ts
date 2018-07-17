import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // delete html references 
  //add inline template w/ html head tag
  template: `
    <h1>{{name}}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    //add style, with color
    `
      h1 {
        color: cyan;
      }
    `
  ]
})
export class AppComponent {
  title = 'app';
  //create class property
  name:string="Bond"; //will be replaced
  changeName(){
    this.name="James Bond";
  }
}
