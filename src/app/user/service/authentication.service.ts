import { Injectable } from '@angular/core';
import { User } from '../model';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    private currentUser: User = null;

    constructor(private userService: UserService) { }

    isAuthenticated(): Observable<boolean> {
        return of(this.currentUser ? true : false);
    }

    authenticate(login: string, password: string): Observable<boolean> {
        return this.userService.getUser(login)
            .pipe(
                map((user, number) => {
                    if (user && user.password === password) {
                        this.currentUser = user;
                        return true;
                    }
                    return false;
                }
            ));
    }

    unauthenticate() {
        this.currentUser = null;
    }

    getAuthenticated(): Observable<User | null> {
        return of(this.currentUser);
    }

}
