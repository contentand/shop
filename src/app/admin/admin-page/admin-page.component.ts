import { Component, OnInit } from '@angular/core';

import { ProductService, StockService } from '../../product';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    public productService: ProductService,
    public stockService: StockService
  ) { }

  ngOnInit() {
  }

}
