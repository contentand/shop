import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Cart;

  constructor() { }

  ngOnInit() {
  }

}
