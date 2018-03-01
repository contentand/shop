import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { booksReducer } from './../+store/reducer';
import { BookEffects } from './../+store/effect';
import { ProductComponent } from './component';
import { ProductService, StockService } from './service';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BookEffects])
  ],
  providers: [ProductService, StockService],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
