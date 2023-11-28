import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../models/login-model";
import {AuthService} from "../services/auth.service";
import { RegisterModel } from '../models/Register-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {
registerationForm: FormGroup;
 loginModel:LoginModel=new LoginModel();
 RegisterModel:RegisterModel=new RegisterModel();

  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder){
     // Initialize the form in the constructor
     this.registerationForm = this.fb.group({
      firstname: '',
      lastname:'',
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required],Validators.minLength(8)],
      dateOfBirth:'',
      gender:''
    });

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
    var formValue = this.registerationForm.value;
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
