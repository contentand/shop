import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Product } from './product';

@Injectable()
export class CartService {

  private cart: Cart = new Cart;

  constructor() { }

  getCart(): Cart {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.products.push(product);
  }

}
