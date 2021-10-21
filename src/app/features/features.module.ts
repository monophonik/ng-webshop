import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    CartComponent,
    AdminComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    SharedModule
  ],
  exports: [
    CartComponent,
    AdminComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class FeaturesModule { }
