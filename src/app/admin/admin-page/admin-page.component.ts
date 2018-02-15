import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService, StockService } from '../../product';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private router: Router,
    public productService: ProductService,
    public stockService: StockService
  ) { }

  ngOnInit() {
  }

  edit(sku: number) {
    const link = ['/admin/product/edit', sku];
    this.router.navigate(link);
  }

  doAddNew() {
    const link = ['/admin/product/new'];
    this.router.navigate(link);
  }

}
