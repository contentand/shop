import { Injectable } from '@angular/core';
import { User, UserService } from '../index';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    private currentUser: User = null;

    constructor(private userService: UserService) { }

    isAuthenticated(): Observable<boolean> {
        return of(this.currentUser && true);
    }

    authenticate(login: string, password: string): Observable<boolean> {
        return this.userService.getUser(login)
            .pipe(
                map(user => user && user.password === password)
            );
    }

    getAuthenticated(): Observable<User | null> {
        return of(this.currentUser);
    }

}
