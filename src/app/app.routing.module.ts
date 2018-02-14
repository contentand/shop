import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule, LoginPageComponent } from './user';
import { ProductModule, ProductPageComponent } from './product';
import { AdminModule, AdminPageComponent } from './admin';

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
      component: AdminPageComponent
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
