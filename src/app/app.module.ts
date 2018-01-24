import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartModule } from './cart';
import { ProductModule } from './product';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
