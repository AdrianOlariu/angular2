/**
 * Created by Adrian on 3/9/2017.
 */
import { Component } from '@angular/core';

@Component({
  moduleId:module.id,//in order to use relative path
  selector:'jumbotron',
  templateUrl:'jumbotron.component.html'
})
export class JumbotronComponent{
  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor(){//is gonna run every time the component is initialized
    this.jbtHeading = 'Hello World';
    this.jbtText = `Some paragraph, nothing special here.
      'There is actually nothing interesting to see here.`;
    this.jbtBtnText = 'Learn more';
    this.jbtBtnUrl = 'http://test.com/'
  }
}
