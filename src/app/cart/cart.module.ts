import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent, CartListComponent, CartItemComponent, CartService, BeautifyDirective } from './index';
import { ProductModule } from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
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
