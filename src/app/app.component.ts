import { Component } from '@angular/core';
import { ILink } from './shared/models/Ilink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Modular Maze';

  /**
   *
   */
  constructor() {
  
  }
  //Skicka till navbar med output/input
  //navData: ILink = {name: 'item1', title: 'item2', path: 'path1'};

  // item1: ILink = {name: 'Modules', title: 'Modules', path: 'url/modules'};

  //navItems = [] 
  
  // = [
  //   { item: 'MODULES' },
  //   { item: 'CABLES' },
  //   { item: 'POWERSUPPLIES' },
  //   { item: 'CASES' }
  // ]

  // menuItems = [
  //   'stringasdf',
  //   8,
  //   { item: 'llök', item3: 9},
  //   ['poi', 9]
  // ]
}
