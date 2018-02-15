import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProductModule } from '../product';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductModule
  ],
  declarations: [AdminPageComponent, EditProductPageComponent],
  exports: [AdminPageComponent, EditProductPageComponent]
})
export class AdminModule { }
