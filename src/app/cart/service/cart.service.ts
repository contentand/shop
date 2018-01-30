import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartUpdate } from '../model/cart-update.model';
import { CartItem } from '../model/cart-item.model';
import { Product } from '../../product';
import { LocalStorageService } from '../../shared';

@Injectable()
export class CartService {

  private cart: Cart;

  constructor(private localStorageService: LocalStorageService) {
    this.cart = this.localStorageService.getItem('cart');
    if (!this.cart) {
      this.cart = new Cart();
      this.updateCartStorage();
    }
  }

  getCart(): Cart {
    return this.cart;
  }

  addToCart(product: Product, quantity?: number) {
    quantity = quantity || 1;
    this.cart.cartItems.push(new CartItem(product, quantity));
    this.calculateCart();
    this.updateCartStorage();
  }

  update(updateInfo: CartUpdate): void {
    const item: CartItem = updateInfo.cartItem;
    item.quantity = updateInfo.newQuantity;
    this.calculateCart();
    this.updateCartStorage();
  }

  removeFromCart(cartItem: CartItem): void {
    const index = this.cart.cartItems.indexOf(cartItem, 0);
    if (index > -1) {
      this.cart.cartItems.splice(index, 1);
      this.calculateCart();
      this.updateCartStorage();
    } else {
      alert('Cart has no cartItem ' + cartItem);
    }
  }

  clearCart(): void {
    this.cart.cartItems = new Array<CartItem>();
    this.calculateCart();
    this.updateCartStorage();
  }

  private calculateCart(): void {
    let totalPrice = 0;
    let totalQuantity = 0;
    for (const item of this.cart.cartItems) {
        totalPrice += (item.productItem.price * item.quantity);
        totalQuantity += item.quantity;
    }
    this.cart.totalPrice = totalPrice;
    this.cart.totalQuantity = totalQuantity;
    this.cart.lastUpdated = new Date();
    this.cart.cartItems = [...this.cart.cartItems];
  }

  private updateCartStorage(): void {
    this.localStorageService.setItem('cart', this.cart);
  }

}
