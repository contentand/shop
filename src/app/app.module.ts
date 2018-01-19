import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ProductService } from './service/product.service';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CartComponent } from './component/cart/cart.component';
import { CartService } from './service/cart.service';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { BeautifyDirective } from './directive/beautify.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    CartListComponent,
    BeautifyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
