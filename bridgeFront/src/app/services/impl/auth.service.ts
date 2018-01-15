///<reference path="../interfaces/IAuth.services.ts"/>
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../../model/user';
import {IAuthService} from '../interfaces/IAuth.services';


@Injectable()
export class AuthService implements IAuthService {
  baseurl: String;

  constructor(private http: HttpClient) {
    this.baseurl = environment.base_url;
  }

  static handleError(error: any) {
    const errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    return Observable.throw(errorMessage);
  }

  login(user): Observable<User> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.baseurl + '/api/user/login', user, {headers: headers}).catch(AuthService.handleError);
  }
}
