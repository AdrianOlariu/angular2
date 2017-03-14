/**
 * Created by Adrian on 3/8/2017.
 */
import { Component } from '@angular/core';

@Component({
  moduleId:module.id,//in order to use relative path
  selector:'navbar',
  templateUrl:'navbar.component.html'
})
export class NavbarComponent{
  private projectName: string;

  constructor(){//is gonna run every time the component is initialized
    this.projectName = 'A2Website';
  }
}
