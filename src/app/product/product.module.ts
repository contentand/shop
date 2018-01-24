import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent, ProductService, ProductComponent } from './index';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
