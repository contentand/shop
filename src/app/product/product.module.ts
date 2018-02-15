import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component';
import { ProductService, StockService } from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ProductService, StockService],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
