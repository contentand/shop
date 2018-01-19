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

  @Output() addToCart = new EventEmitter<Product>();
  @Output() removeFromCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() { }

  getStyles(): any {
    return {
      background: this.isPurchasable ? this.product.isAvailable ? 'rgba(241, 241, 241, 0.449)' : 'rgba(201, 201, 201, 0.459)'
                                     : 'rgba(221, 221, 221, 0.459)',
    };
  }

  getClasses(): any {
    return {
      inOffer: this.isPurchasable,
      inAvailability: this.product.isAvailable,
    };
  }

  onBuy(): void {
    console.log('Product purchased!');
    this.addToCart.emit(this.product);
  }

  onRemove(): void {
    this.removeFromCart.emit(this.product);
  }

}
