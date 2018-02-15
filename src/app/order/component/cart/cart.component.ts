import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { StockService } from '../../../product';
import { AuthenticationService } from '../../../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public stockService: StockService,
    public authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
