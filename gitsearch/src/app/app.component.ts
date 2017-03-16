import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <profile></profile>`,
})
export class AppComponent  { name = 'Angular'; }
