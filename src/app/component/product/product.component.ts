import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Category } from '../../model/category.model';
import { Product } from '../../model/product.model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product')
  product: Product;
  @Input('isPurchasable')
  isPurchasable: boolean;
  @Input('isCartRemovalble')
  isCartRemovalble: boolean;

  @Output() addToCart = new EventEmitter<Product>();
  @Output() removeFromCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() { }

  onBuy(): void {
    console.log('Product purchased!');
    this.addToCart.emit(this.product);
  }

  onRemove(): void {
    this.removeFromCart.emit(this.product);
  }

}
