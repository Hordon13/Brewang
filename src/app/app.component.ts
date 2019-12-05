import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brewang';
  selectedValue = '';
  items = [
    {value: '0', view: 'zero'},
    {value: '1', view: 'one'},
    {value: '2', view: 'Two'}
  ];
}
