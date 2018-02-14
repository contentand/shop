import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProductModule } from '../product';

@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  declarations: [AdminPageComponent],
  exports: [AdminPageComponent]
})
export class AdminModule { }
