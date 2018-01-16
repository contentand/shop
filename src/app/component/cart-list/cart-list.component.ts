import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
  Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../model/cart-item.model';
import { CartUpdate } from '../../model/cart-update.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked {

  @Input() cartItems: Array<CartItem>;
  @Output() onUpdateQuantity = new EventEmitter<CartUpdate>();
  @Output() onItemRemove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('Content initialized!');
  }

  ngAfterContentChecked(): void {
    console.log('Content checked!');
  }

  ngAfterViewInit(): void {
    console.log('View initialized!');
  }

  ngAfterViewChecked(): void {
    console.log('View checked!');
  }

  removeItem(item: CartItem): void  {
    this.onItemRemove.emit(item);
  }

  updateQuantity(item: CartItem, newQuantity: number): void {
    this.onUpdateQuantity.emit(new CartUpdate(item, newQuantity));
  }

}
