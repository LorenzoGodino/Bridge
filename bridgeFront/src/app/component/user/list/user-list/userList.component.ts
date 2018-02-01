import {Component, Inject, OnInit} from '@angular/core';
import {IAuthService} from '../../../../services/interfaces/iauth.services';
import {User} from '../../../../model/user';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-listuser',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {
  lstuser: User[];
  statusMessage: string;
  msgs: Message[] = [];
  constructor(@Inject('IAuthService')
              private authService: IAuthService) {
  }


  ngOnInit() {
    this.authService.userList()
    .subscribe(data => {
        this.lstuser = data;
      },
      resServiceLoginError => {
        this.statusMessage = resServiceLoginError;
        this.msgs.push({severity: 'error', summary: this.statusMessage, detail: 'Server Error'});
      });
  }

}
