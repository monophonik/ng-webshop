import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ProductComponent } from './features/product/product.component';
import { ShowcaseComponent } from './features/showcase/showcase.component';
//import { FeaturesModule } from './features/features.module';

//Remove comments to work with routes
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'showcase',
    component: ShowcaseComponent
  },
  {
    path: 'product/:articlenr',
    component: ProductComponent
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
