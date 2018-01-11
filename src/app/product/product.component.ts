import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { Product } from '../product';
import { CartService } from '../cart.service';

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

  constructor(private cartService: CartService) { }

  ngOnInit() { }

  onBuy(): void {
    console.log('Product purchased!');
    this.cartService.addToCart(this.product);
  }

}
