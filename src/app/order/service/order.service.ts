import { Injectable } from '@angular/core';
import { Cart } from '../model';
import { AuthenticationService } from '../../user';
import { LocalStorageService } from '../../core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';

@Injectable()
export class OrderService {

  constructor(
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {
    if (!this.localStorageService.getItem('orders')) {
      this.localStorageService.setItem('orders', []);
    }
  }

  placeOrder(cart: Cart): void {
    const records = <any[]>this.localStorageService.getItem('orders');
    console.log(records);
    this.authenticationService.getAuthenticated().subscribe(user => {
      console.log(user);
      let userRecord = null;
      for (const record of records) {
        if (record.user === user.login) {
          userRecord = record;
          break;
        }
      }
      if (!userRecord) {
        userRecord = {user: user.login, orders: []};
        records.push(userRecord);
      }
      userRecord.orders.push(cart);
      this.localStorageService.setItem('orders', records);
    });
  }

  getOrders(): Observable<Cart[]> {
    return this.authenticationService.getAuthenticated().pipe(
      map(user => {
        if (!user) {
          return [];
        }
        return this.getOrdersForUser(user.login);
      })
    );
  }

  private getOrdersForUser(login: string): Cart[] {
    return <Cart[]>((<any[]>this.localStorageService.getItem('orders'))
          .find(record => record.user === login).orders) || [];
  }
}
