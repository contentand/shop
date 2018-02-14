import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../core';
import { User } from '../index';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  constructor(private localStorageService: LocalStorageService) {
    this.initializeData();
  }

  public getUser(login: string): Observable<User | null> {
    const user = (<Array<User>>this.localStorageService.getItem('users'))
      .find(theUser => theUser.login === login);
    return of(user);
  }

  private initializeData(): void {
    if (!this.localStorageService.getItem('users')) {
      this.localStorageService.setItem('users', [
        new User('daniil', 'password', 'Daniil Yurov', false),
        new User('admin', 'password', 'Administrator', true)
      ]);
    }
  }

}
