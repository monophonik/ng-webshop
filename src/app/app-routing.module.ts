import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
//import { FeaturesModule } from './features/features.module';

//Remove comments to work with routes
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'modules',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
