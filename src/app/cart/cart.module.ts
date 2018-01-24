import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent, CartListComponent, CartItemComponent } from './component';
import { CartService } from './service';
import { ProductModule } from '../product';
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
    CartItemComponent
  ],
  providers: [
    CartService
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
