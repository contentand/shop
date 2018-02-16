import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class AuthenticatedUserGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authenticationService.isAuthenticated().pipe(
            map(isAuthenticated => {
                if (!isAuthenticated) {
                    this.authenticationService.redirectUrl = state.url;
                    this.router.navigate(['/login']);
                }
                return isAuthenticated;
            })
        );
    }

}
