import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent, CartListComponent, CartItemComponent, CartService, BeautifyDirective } from './';
import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductModule
  ],
  declarations: [
    CartComponent,
    CartListComponent,
    CartItemComponent,
    BeautifyDirective
  ],
  providers: [
    CartService
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
