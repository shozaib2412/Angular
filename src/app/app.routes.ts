import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

export const routes: Routes = [
    {path: '' , redirectTo: 'home', pathMatch: 'full'},
    {path:'home' , component:HomeComponent},
    {path:'products' , component:ProductsComponent},
    {path: 'add-product/:pid', component: CreateProductComponent},
    {path: 'product-details/:pid' , component: ProductDetailsComponent},
    {path: 'search' , component: ProductSearchComponent},
    {path: 'aboutus' , component: AboutusComponent},    

];
