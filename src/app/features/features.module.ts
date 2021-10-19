import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    CartComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    SharedModule
  ],
  exports: [
    CartComponent,
    AdminComponent
  ]
})
export class FeaturesModule { }
