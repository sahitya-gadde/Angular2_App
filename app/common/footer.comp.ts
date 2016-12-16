import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
 <div class="well">
  <h1> {{footer}}</h1>
 </div>
  `
})
export class FooterComponent { 
footer = 'footer Goes Here';   
}
 