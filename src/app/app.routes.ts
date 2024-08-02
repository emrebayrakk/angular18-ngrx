import { Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/home/product-add/product-add.component';

export const routes: Routes = [
    {
        path:"",
        component:LayoutsComponent,
        children: [
            {
                path:"",
                component: HomeComponent
            },
            {
                path:"product-add",
                component: ProductAddComponent
            }
        ]
    }
];
