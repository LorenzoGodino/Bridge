import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user';

export interface IAuthService {
  static handleError(error: any);
  login(user): Observable<User>;
}
