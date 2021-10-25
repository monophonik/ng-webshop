import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Modular Maze';

  // navItems = {[
  //   "text1": 'asdf'
  // ]}

  //Fel format
  menuItems[]: [
    { item: 'MODULES' },
    { item: 'CABLES' },
    { item: 'POWERSUPPLIES' },
    { item: 'CASES' }
]
}
