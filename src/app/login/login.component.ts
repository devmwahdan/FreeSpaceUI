import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../models/login-model";
import {AuthService} from "../services/auth.service";
import { RegisterModel } from '../models/Register-model';
import { FormControl, FormGroup } from '@angular/forms';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {
  registerationForm=new FormGroup({});
 loginModel:LoginModel=new LoginModel();
 RegisterModel:RegisterModel=new RegisterModel();
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
   Register(){
    this.RegisterModel.FirstName="";
    this.RegisterModel.LastName="";
    this.RegisterModel.Email="";
    this.RegisterModel.DateOfBirth=new Date;
    this.RegisterModel.Gender="";
    this.authService.Register(this.RegisterModel).subscribe(res=>{
      localStorage.setItem('jwt',res.token);
      this.router.navigateByUrl('/login');
    })
   }
}
