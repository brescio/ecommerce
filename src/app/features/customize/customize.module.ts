import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeRoutingModule } from './customize-routing.module';
import { CustomizeComponent } from './components/customize.component';


@NgModule({
  declarations: [CustomizeComponent],
  imports: [
    CommonModule,
    CustomizeRoutingModule
  ]
})
export class CustomizeModule { }
