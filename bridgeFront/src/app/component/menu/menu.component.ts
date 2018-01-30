import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  moduleId: module.id,
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'T. Maestras',
        items: [{
          label: 'User',
          routerLink: ['/userList'],
          routerLinkActiveOptions: {exact: true},
        },
          {label: 'Quit'}
        ],
      }];
  }

  ngOnInit() {
  }

}
