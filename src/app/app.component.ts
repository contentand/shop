import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cartService: CartService) { }

  onBuy(): void {
    console.log('Product purchased!');
    this.cartService.addToCart(
      {
        name: 'Cart Product', description: 'Some Description', price: 34.54,
        category: Category.Category1, isAvailable: true, equivalents: [],
        ingredients: ['someIngredient']
      }
    );
  }

}
