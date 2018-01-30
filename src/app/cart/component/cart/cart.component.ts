import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product/index';
import { Cart, CartUpdate, CartItem } from '../../model';
import { CartService } from '../../service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  updateQuantity(updateInfo: CartUpdate): void {
    this.cartService.update(updateInfo);
  }

  remove(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

}
