import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
