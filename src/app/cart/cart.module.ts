import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent, CartListComponent, CartItemComponent } from './component';
import { CartService } from './service';
import { ProductModule } from '../product';
import { SharedModule, BeautifyDirective } from '../shared';

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
