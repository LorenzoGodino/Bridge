import {Component, Inject, OnInit} from '@angular/core';
import {IAuthService} from '../../services/interfaces/IAuth.services';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';
import {Message} from 'primeng/components/common/api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs: Message[] = [];
  userLogin: User;
  loginForm: FormGroup;

  constructor(@Inject('IAuthService')
              private authService: IAuthService,
              private router: Router,
              private  activeRoute: ActivatedRoute,
              private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }


  onLogin(): void {
    if (this.userLogin && (this.userLogin.username == null
        || this.userLogin.username === 'undefined'
        || this.userLogin.username === '')) {
      this.msgs.push({
        severity: 'error', summary: 'UserName is required',
        detail: 'Validatation Failed' });
        this.loginForm.controls['username'].markAsDirty({onlySelf: true});
    }
    if (this.userLogin && (this.userLogin.password == null || this.userLogin.password === 'undefined' ||
        this.userLogin.password === '')) {
      this.msgs.push({severity: 'error', summary: 'PassWord is required', detail: 'Validatation Failed'});
      this.loginForm.controls['password'].markAsDirty({onlySelf: true});
    }
    this.msgs = JSON.parse(JSON.stringify(this.msgs));
  }

  ngOnInit() {
    this.msgs = [];
    this.userLogin = new User();
  }

}
