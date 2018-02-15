import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from '../product';
import { CartService, OrderService } from './service';
import { ProductPageComponent, CartComponent } from './component';
import { OrderItemComponent } from './component/order-item/order-item.component';
import { OrderPageComponent } from './component/order-page/order-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  providers: [CartService, OrderService],
  declarations: [CartComponent, ProductPageComponent, OrderItemComponent, OrderPageComponent],
  exports: [CartComponent, ProductPageComponent, OrderPageComponent]
})
export class OrderModule { }
