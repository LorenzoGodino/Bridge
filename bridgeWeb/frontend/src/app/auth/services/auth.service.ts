import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

import {User} from '../../core/model/user';
import {API_URL} from '../../app.component';

@Injectable()
export class AuthService {

    isLoggedIn = false;

    constructor(private http: Http) {
    }

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    login(user: User): Observable<boolean> {
        return this.http.post(API_URL + '/user/login', user)
            .map(response => response.json())
            .map((currentUser: User) => {
                if (!user.isNull(currentUser)) {
                    this.isLoggedIn = true;
                    return true;
                } else {
                    this.isLoggedIn = false;
                    return false;
                }
            })
            .catch(AuthService.handleError);
    }

    logOut(): Observable<boolean> {
        this.isLoggedIn = !this.isLoggedIn;
        return Observable.of(false);
    }

    register(user: User): Observable<boolean> {
        return this.http.post(API_URL + '/register', user)
            .map(response => response.json() as User)
            .map(currentUser => !user.isNull(currentUser))
            .catch(AuthService.handleError);
    }
}
