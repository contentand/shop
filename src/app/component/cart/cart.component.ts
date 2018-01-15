import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Cart } from '../../model/cart.model';
import { Product } from '../../model/product.model';
import { CartUpdate } from '../../model/cart-update.model';
import { CartItem } from '../../model/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cart: Cart;

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

}
