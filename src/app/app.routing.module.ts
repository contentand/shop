import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule, LoginPageComponent, AuthenticatedUserGuard, AdministratorGuard } from './user';
import { ProductModule } from './product';
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
        component: OrderPageComponent,
        canActivate: [AuthenticatedUserGuard]
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [AdministratorGuard]
    }
];

@NgModule({
    imports: [
      UserModule,
      ProductModule,
      OrderModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule, UserModule, ProductModule, OrderModule]
})
export class AppRoutingModule {}
