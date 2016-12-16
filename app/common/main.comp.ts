.import { Component } from '@angular/core';
import { NavComponent }  from './common/main.nav.comp';
import { MainContentComponent }  from './common/main.content.comp';


@Component({
  selector: 'main',
  template: `
  <div class="well">
  <main-content> </main-content>
  <nav> </nav>
  </div>
  `
})
export class MainComponent { 
main = 'Main Content Goes Here';   
}
 