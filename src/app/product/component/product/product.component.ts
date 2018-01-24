import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Category, Product } from '../../model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() isPurchasable: boolean;

  @Output() addToCart = new EventEmitter<Product>();

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
}
