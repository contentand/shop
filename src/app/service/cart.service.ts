import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model.';

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

  removeFromCart(product: Product): void {
    const index = this.cart.products.indexOf(product, 0);
    if (index > -1) {
      this.cart.products.splice(index, 1);
    } else {
      alert('Cart has no product ' + product);
    }
  }

}
