import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../../model/user';
import {IAuthService} from '../interfaces/iauth.services';

@Injectable()
export class AuthService implements IAuthService {
  baseurl: String;
  private headers = new HttpHeaders({'Accept': 'application/json'});

  constructor(private http: HttpClient) {
    this.baseurl = environment.base_url;
  }

  handleError(error: any) {
    let errorMessage: string;
    if (error.error.message !== undefined) {
      errorMessage = error.error.message;
    } else {
      errorMessage = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    }
    return Observable.throw(errorMessage);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  login(user): Observable<User> {
    return this.http.post(this.baseurl + '/api/user/login', user, {headers: this.headers})
    .catch(this.handleError);

  }
}
