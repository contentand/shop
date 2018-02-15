import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor(
    public orderService: OrderService
  ) { }

  ngOnInit() {
  }

}
