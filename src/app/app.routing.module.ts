import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule, LoginPageComponent } from './user';
import { ProductModule } from './product';
import { AdminModule, AdminPageComponent, EditProductPageComponent } from './admin';
import { OrderModule, CartComponent, ProductPageComponent, OrderPageComponent } from './order';

const routes: Routes = [
    {
      path: '',
      component: ProductPageComponent,
    },
    {
      path: 'login',
      component: LoginPageComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'orders',
        component: OrderPageComponent
    },
    {
      path: 'admin',
      children: [
          {
              path: 'product',
              children: [
                  {
                      path: 'stock',
                      component: AdminPageComponent
                  },
                  {
                      path: 'edit/:id',
                      component: EditProductPageComponent
                  },
                  {
                      path: 'new',
                      component: EditProductPageComponent
                  }
              ]
          },
      ]
    },
];

@NgModule({
    imports: [
      UserModule,
      ProductModule,
      AdminModule,
      OrderModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule, UserModule, ProductModule, AdminModule, OrderModule]
})
export class AppRoutingModule {}
