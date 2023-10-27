import { Component } from '@angular/core';
import { djabbelTypesHello } from '../../../djabbel-types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'djabbel';

  get testString() {
    return djabbelTypesHello();
  }
}
