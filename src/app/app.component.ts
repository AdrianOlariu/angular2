import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar-component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import {AboutComponent} from "./components/pages/about.component";
import {HomeComponent} from "./components/pages/home.component";
//import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({//decorator - use to add metadata to angular component
  selector: 'my-app',
  template: `<navbar></navbar><jumbotron></jumbotron>
  <div class="container">
  </div>`,
  directives: [NavbarComponent, JumbotronComponent,
    HomeComponent, AboutComponent]//components, we add in 'directives' array
})

export class AppComponent{
  helloWorld = 'Hello World'
}
