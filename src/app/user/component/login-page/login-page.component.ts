import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login: string;
  password: string;
  failedToLogin = false;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  doLogin() {
    this.authenticationService
      .authenticate(this.login, this.password)
      .subscribe(success => this.failedToLogin = !success);
  }

  doLogout() {
    this.authenticationService.unauthenticate();
  }

}
