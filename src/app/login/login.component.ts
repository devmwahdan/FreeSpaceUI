import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../models/login-model";
import {AuthService} from "../services/auth.service";
import { RegisterModel } from '../models/Register-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiHelperService} from "../services/api-helper.service";
import {PostService} from "../services/post.service";
import {PostModel} from "../models/post-model";

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {
registerationForm: FormGroup;
loginForm:FormGroup;
loginModel:LoginModel=new LoginModel();
RegisterModel:RegisterModel=new RegisterModel();

  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder, private postService: PostService){
     // Initialize the form in the constructor
     this.registerationForm = this.fb.group({
      firstname: '',
      lastname:'',
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      dateOfBirth:'',
      gender:''
    });

    this.loginForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
    });

  }
   login(){
    var formValue = this.loginForm.value;
     this.loginModel.email = formValue.email;
     this.loginModel.password = formValue.password;
     this.authService.login(this.loginModel).subscribe(res => {
      debugger
       localStorage.setItem('jwt', res.token);
       this.router.navigateByUrl('home/manage');

     });

   }
   Register(){
    var formValue = this.registerationForm.value;
    this.RegisterModel.FirstName=formValue.firstname;
    this.RegisterModel.LastName=formValue.lastname;
    this.RegisterModel.Email=formValue.email;
    this.RegisterModel.DateOfBirth=formValue.dateOfBirth;
    debugger
    if(formValue.gender ="female"){
      this.RegisterModel.Gender=formValue.gender=2;
    }
    else {
      this.RegisterModel.Gender=formValue.gender=1;

    }
    this.RegisterModel.Password=formValue.password;
    this.RegisterModel.Gender=formValue.gender;
    this.authService.Register(this.RegisterModel).subscribe(res=>{
      debugger
      localStorage.setItem('jwt',res.token);
      this.router.navigateByUrl('/login');
    })
   }

   createPost(){
     let model: PostModel  =new PostModel() ;
     model.content = "test;"
     this.postService.create(model).subscribe(async result => {
     });
   }
}
