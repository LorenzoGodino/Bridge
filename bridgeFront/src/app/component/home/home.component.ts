import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-board',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'T. Maestras',
        items: [{
          label: 'User',
          routerLink: ['/userList', { outlets: { bookPopup: [''] } }],
        },
          {label: 'Quit'}
        ],
      }];
  }

  ngOnInit() {
  }

}
