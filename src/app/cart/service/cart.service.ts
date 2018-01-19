import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartUpdate } from '../model/cart-update.model';
import { CartItem } from '../model/cart-item.model';
import { Product } from '../../product/index';

@Injectable()
export class CartService {

  private cart: Cart = new Cart();

  constructor() { }

  getCart(): Cart {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.cartItems.push(new CartItem(product, 1));
    this.calculateCart();
  }

  update(updateInfo: CartUpdate): void {
    const item: CartItem = updateInfo.cartItem;
    item.quantity = updateInfo.newQuantity;
    this.calculateCart();
  }

  removeFromCart(cartItem: CartItem): void {
    const index = this.cart.cartItems.indexOf(cartItem, 0);
    if (index > -1) {
      this.cart.cartItems.splice(index, 1);
      this.calculateCart();
    } else {
      alert('Cart has no cartItem ' + cartItem);
    }
  }

  private calculateCart(): void {
    let totalPrice = 0;
    for (const item of this.cart.cartItems) {
        totalPrice += item.getItemTotal();
    }
    this.cart.cartTotal = totalPrice;
  }

}
