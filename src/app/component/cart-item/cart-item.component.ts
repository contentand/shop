import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../model/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  @Output() onQuantityUpdate = new EventEmitter<number>();
  @Output() onItemRemove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  updateQuantity(quantity: number): void {
      this.onQuantityUpdate.emit(quantity);
  }

  removeCartItem(): void {
    this.onItemRemove.emit(this.cartItem);
  }

}
