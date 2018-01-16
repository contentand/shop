import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CartItem } from '../../model/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() cartItem: CartItem;
  @Output() onQuantityUpdate = new EventEmitter<number>();
  @Output() onItemRemove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes identified!', changes);
  }

  ngOnInit() {
    console.log('Component initialized!', this.cartItem);
  }

  ngDoCheck(): void {
    console.log('Do check triggered!', this.cartItem);
  }

  ngOnDestroy(): void {
    console.log('Component destructed!');
  }

  updateQuantity(quantity: number): void {
      this.onQuantityUpdate.emit(quantity);
  }

  removeCartItem(): void {
    this.onItemRemove.emit(this.cartItem);
  }

}
