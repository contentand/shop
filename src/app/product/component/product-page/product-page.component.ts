import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

}
