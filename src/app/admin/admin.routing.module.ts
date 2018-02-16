import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export let adminRouterComponents = [EditProductPageComponent, AdminPageComponent];

const routes: Routes = [
    {
        path: '',
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
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}
