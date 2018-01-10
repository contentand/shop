import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'Product A';
    this.description = 'Product A is an awesome product to buy!';
    this.price = 99.99;
    this.category = Category.Category1;
    this.isAvailable = true;
  }

}
