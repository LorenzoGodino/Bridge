import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  moduleId: module.id,
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor(private  activeRoute: ActivatedRoute) {
    this.items = [
      {
        label: 'T. Maestra',
        items: [{
          label: 'User',
          routerLink: ['/userList'],
          target: 'i2'
        },
          {label: 'Quit'}
        ],
      }];
  }

  ngOnInit() {
  }

}
