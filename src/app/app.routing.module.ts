import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule, LoginPageComponent } from './user';
import { ProductModule, ProductPageComponent } from './product';
import { AdminModule, AdminPageComponent, EditProductPageComponent } from './admin';

const routes: Routes = [
    {
      path: '',
      component: ProductPageComponent
    },
    {
      path: 'login',
      component: LoginPageComponent
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
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule, UserModule, ProductModule, AdminModule]
})
export class AppRoutingModule {}
