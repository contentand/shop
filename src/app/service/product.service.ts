import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      new Product('Product 1', 'Description of Product 1', 56.69, Category.Category1, true, ['iron', 'plastic']),
      new Product('Product 2', 'Description of Product 2', 123.15, Category.Category1, true, ['gum', 'aluminium'], ['iPhone XS']),
      new Product('Product 3', 'Description of Product 3', 3, Category.Category1, true, ['wood', 'silk'], ['Product FX', 'Product SX']),
      new Product('Product 4', 'Description of Product 4', 24.99, Category.Category1, false, ['platinum', 'gold', 'silver']),
      new Product('Product 5', 'Description of Product 5', 28.54, Category.Category1, false, ['glass', 'coper']),
    ];
  }

}
