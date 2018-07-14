import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome from the AppComponent...yeah, it works.</h1>
    <app-shipping></app-shipping>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}