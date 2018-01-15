import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user';

export interface IAuthService {
  login(user): Observable<User>;
}
