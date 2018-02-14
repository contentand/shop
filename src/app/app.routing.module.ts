import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule, LoginPageComponent } from './user';
import { ProductModule, ProductPageComponent } from './product';

const routes: Routes = [
    {
        path: '',
        component: ProductPageComponent
    },
    {
      path: 'login',
      component: LoginPageComponent
    }
];

export let appRouterComponents = [LoginPageComponent];

@NgModule({
    imports: [
      UserModule,
      ProductModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule, UserModule, ProductModule]
})
export class AppRoutingModule {}
