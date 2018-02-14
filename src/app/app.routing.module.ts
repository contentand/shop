import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule, LoginPageComponent } from './user';

const routes: Routes = [
    {
      path: 'login',
      component: LoginPageComponent
    }
];

export let appRouterComponents = [LoginPageComponent];

@NgModule({
    imports: [
      UserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule, UserModule]
})
export class AppRoutingModule {}
