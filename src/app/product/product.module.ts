import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent, ProductComponent } from './component';
import { ProductService, StockService } from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ProductService, StockService],
  declarations: [ProductPageComponent, ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
