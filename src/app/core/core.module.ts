import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpCommunicationsService } from './http-communication/http-communication.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  providers: [HttpCommunicationsService, AuthService],
  imports: [HttpClientModule]
})
export class CoreModule { }
