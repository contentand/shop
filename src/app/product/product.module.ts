import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent, ProductComponent } from './component';
import { ProductService } from './service';
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
