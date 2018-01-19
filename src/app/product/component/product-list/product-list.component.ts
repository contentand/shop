import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[];

  @Output() addToCart = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  doAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
}
