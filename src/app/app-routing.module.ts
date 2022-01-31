import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { CasesComponent } from './features/cases/cases.component';
import { ModulesComponent } from './features/modules/modules.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ProductComponent } from './features/product/product.component';
import { ShowcaseComponent } from './features/showcase/showcase.component';
//import { FeaturesModule } from './features/features.module';

//Remove comments to work with routes
const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent
  },
  {
    path: 'home',
    component: ShowcaseComponent
  },
  {
    path: 'product/:articlenr',
    component: ProductComponent
  },
  {
    path: 'modules',
    component: ModulesComponent
  },
  {
    path: 'cases',
    component: CasesComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
