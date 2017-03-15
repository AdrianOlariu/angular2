import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar-component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from "./components/pages/about.component";
import { HomeComponent } from "./components/pages/home.component";

@Component({//decorator - use to add metadata to angular component
  selector: 'my-app',
  template: `<navbar></navbar>
              <div class="container">
                <router-outlet></router-outlet>
             </div>`,
  directives: [NavbarComponent, JumbotronComponent,
    HomeComponent, AboutComponent]//components, we add them in 'directives' array
})

export class AppComponent{
  helloWorld = 'Hello World'
}
