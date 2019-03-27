import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ListProductsComponent } from './list-products/list-products.component';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { AddProductComponent } from './add-product/add-product.component';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ProductComponent } from './list-products/product/product.component';

const appRoutes: Routes = [
  { path: '', component: ListProductsComponent},
  { path: 'produits', component: ListProductsComponent},
  { path: 'ajout-produit', component: AddProductComponent},
  { path: 'modification-produits', component: UpdateProductsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductsComponent,
    AddProductComponent,
    UpdateProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
