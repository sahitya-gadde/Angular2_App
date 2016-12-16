import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'header',
  template: `
  <div class="well">

  <h1> {{headername}}</h1>
  
  </div>
  `
})
export class HeaderComponent { 
headername = 'Header Goes Here';   
}
 