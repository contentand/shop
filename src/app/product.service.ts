import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './category';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: 'Product 1', description: 'Awesome gadget', price: 23.75, category: Category.Category1,
        isAvailable: true, ingredients: ['iron', 'plastic'], equivalents: []
      },
      {
        name: 'Product 2', description: 'Most beautiful gadget', price: 823.99, category: Category.Category1,
        isAvailable: true, ingredients: ['gold', 'glass'], equivalents: ['iPhone XS']
      },
      {
        name: 'Product 3', description: 'Scary widget', price: 56.25, category: Category.Category2,
        isAvailable: true, ingredients: ['coper', 'wood', 'plastic'], equivalents: ['Product FX', 'Product SX']
      }
    ];
  }

}
