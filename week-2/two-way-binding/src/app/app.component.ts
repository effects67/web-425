import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <br /><br /><br />
 
    <div class="container-fluid two-way-form">
      <h2>Two-Way Binding Example</h2><br />
      <div class="form-group">
          <input class="form-control" type="text" 
                 placeholder="Enter your name here"
                 [(ngModel)]="name">
          <button class="btn btn-success form-control" (click)="name=''">Clear Name</button>
      </div>
      <div class="form-group">
          <p class="alert-success">Welcome to two-way binding, {{name}}! </p>
      </div>
    </div>
  `,
  styles: [
    `
      .two-way-form {
        width: 50%; 
      }
      button{
        margin-top:20px;
        width:200px;
      }
    `
  ]
})
export class AppComponent {
  name: string;
}
