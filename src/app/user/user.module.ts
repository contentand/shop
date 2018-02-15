import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './component/login-page/login-page.component';
import { AuthenticationService, UserService } from './service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  providers: [UserService],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent]
})
export class UserModule { }
