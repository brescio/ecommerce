import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/main/cart.component';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
