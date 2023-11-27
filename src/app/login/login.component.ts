import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../models/login-model";
import {AuthService} from "../services/auth.service";

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {
 loginModel:LoginModel=new LoginModel();

  constructor( private router: Router, private authService: AuthService){

  }
   login(){
     this.loginModel.email = "admin@gmail.com";
     this.loginModel.password = "P@ssw0rd";

     this.authService.login(this.loginModel).subscribe(res => {
       localStorage.setItem('jwt', res.token);
       this.router.navigateByUrl('home/manage');

     });
   }
}
