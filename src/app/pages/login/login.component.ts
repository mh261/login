import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService, public router: Router){}

  async loginWithGG(){
    await this.authService.loginWithGG();
    this.router.navigate([`/hone`]);
  }

  checkUser(){
    return this.authService.checkUser();
  }

  logOut(){
    this.authService.logOut();
  }

}
