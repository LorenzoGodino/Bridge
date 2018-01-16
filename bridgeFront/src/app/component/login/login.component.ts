import {Component, Inject, OnInit} from '@angular/core';
import {IAuthService} from '../../services/interfaces/IAuth.services';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';
import {Message} from 'primeng/components/common/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs: Message[] = [];
  message: string;
  userLogin: User;

  constructor(@Inject('IAuthService')
              private authService: IAuthService,
              private router: Router,
              private  activeRoute: ActivatedRoute) {

    this.msgs = [];
  }

  addGrowlMessage(sev, sum, det) {
    let message = {severity: sev, summary: sum, detail: det};
    this.msgs.push(message);
    setTimeout(() => {
      this.msgs.splice(this.msgs.indexOf(message), 1);
    }, 3000)
  }

  onLogin(): void {
    if (this.userLogin && (this.userLogin.username == null || !this.userLogin.username)) {
      this.msgs.push({severity: 'error', summary: 'UserName is required', detail: 'Validatation Failed'});
    }
    if (this.userLogin && (this.userLogin.password == null || !this.userLogin.password)) {
      this.msgs.push({severity: 'error', summary: 'PassWord is required', detail: 'Validatation Failed'});
    }
    this.msgs = JSON.parse(JSON.stringify(this.msgs));
  }

  ngOnInit() {
    this.userLogin = new User();
  }
}
