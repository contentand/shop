import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent, ProductService, ProductComponent } from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ]
})
export class ProductModule { }
