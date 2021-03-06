import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ServicesModule } from '../services/services.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ModulesComponent } from './modules/modules.component';
import { CasesComponent } from './cases/cases.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccessoriesComponent } from './accessories/accessories.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { TaxPipe } from '../shared/pipes/tax-pipe';



@NgModule({
  declarations: [
    CartComponent,
    AdminComponent,
    ShowcaseComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    PageNotFoundComponent,
    AddToCartComponent,
    ModulesComponent,
    CasesComponent,
    CheckoutComponent,
    AccessoriesComponent,
    OrderCompleteComponent,
    TaxPipe
  ],
  imports: [
    CommonModule,
    ServicesModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CartComponent,
    CheckoutComponent,
    AdminComponent,
    ShowcaseComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ModulesComponent,
    CasesComponent,
    AccessoriesComponent,
    OrderCompleteComponent,
    PageNotFoundComponent
  ]
})
export class FeaturesModule { }
