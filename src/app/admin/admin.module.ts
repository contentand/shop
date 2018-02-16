import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductModule } from '../product';
import { AdminRoutingModule, adminRouterComponents } from './admin.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductModule,
    AdminRoutingModule
  ],
  declarations: [adminRouterComponents],
  exports: []
})
export class AdminModule { }
