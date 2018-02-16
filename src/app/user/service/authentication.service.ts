import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { User } from '../model';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {

    public redirectUrl: string = null;
    private currentUser: User = null;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    isAuthenticated(): Observable<boolean> {
        return of(this.currentUser ? true : false);
    }

    authenticate(login: string, password: string): Observable<boolean> {
        return this.userService.getUser(login)
            .pipe(
                map((user, number) => {
                    if (user && user.password === password) {
                        this.currentUser = user;
                        if (this.redirectUrl) {
                            const url = this.redirectUrl;
                            this.redirectUrl = null;
                            this.router.navigate([url]);
                        }
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
