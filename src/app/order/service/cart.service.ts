import { Injectable } from '@angular/core';

import { Cart } from '../model/cart.model';
import { Book, StockService } from '../../product';
import { CartItem } from '../model/cart-item.model';
import { OrderService } from './order.service';
import { Store } from '@ngrx/store';
import { ApplicationState, GetBooks } from '../../+store';

@Injectable()
export class CartService {

  private cart: Cart;

  constructor(
    private store: Store<ApplicationState>,
    private stockService: StockService,
    private orderService: OrderService
  ) {
    this.clear();
  }

  getCart(): Cart {
    return this.cart;
  }

  add(book: Book, quantity: number): void {
    const item = this.getCartItem(book.sku);
    this.stockService.getStockForSku(book.sku).subscribe(available => {
      if (available >= quantity) {
        if (item) {
          item.quantity += +quantity;
        } else {
          this.cart.items.push(new CartItem(book, +quantity));
        }
        this.stockService.reduceStock(book.sku, +quantity);
        this.recalculateCart();
      }
    });
  }

  remove(book: Book, quantity: number): void {
    const item = this.getCartItem(book.sku);
    if (item && item.quantity >= quantity) {
      item.quantity -= quantity;
    }
    this.stockService.increaseStock(book.sku, quantity);
    this.recalculateCart();
  }

  placeOrder(): void {
    this.orderService.placeOrder(this.cart);
    this.clear();
  }

  clear(): void {
    this.cart = new Cart(Math.floor(Math.random() * Math.pow(2, 64)), [], 0);
  }

  deleteFromCart(item: CartItem) {
    this.stockService.increaseStock(item.book.sku, item.quantity);
    for (let x = 0; x < this.cart.items.length; x++) {
      if (this.cart.items[x].book.sku === +item.book.sku) {
        this.cart.items.splice(x, 1);
        break;
      }
    }
    this.recalculateCart();
  }

  private getCartItem(sku: number): CartItem {
    for (const item of this.cart.items) {
      if (item.book.sku === +sku) {
        return item;
      }
    }
    return null;
  }

  private recalculateCart() {
    let price = 0;
    for (const item of this.cart.items) {
      price += +item.book.price * +item.quantity;
    }
    this.cart.totalPrice = price;
    this.store.dispatch(new GetBooks());
  }

}
