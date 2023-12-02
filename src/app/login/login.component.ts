import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "../models/login-model";
import {AuthService} from "../services/auth.service";
import { RegisterModel } from '../models/Register-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiHelperService} from "../services/api-helper.service";
import {PostService} from "../services/post.service";
import {PostModel} from "../models/post-model";
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder, private postService: PostService,private _snackBar: MatSnackBar){
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
      if (res.token) {
        debugger
        localStorage.setItem('jwt', res.token);
        const userObj = JSON.stringify(res);
        localStorage.setItem('user',userObj);
        this.router.navigateByUrl('home/manage');

      } else {
        debugger
        // Clear JWT token from local storage
        localStorage.removeItem('jwt');
        
      }
    },
    (error) => {
      debugger
      // Handle login error if needed
      console.log('Login failed:', error);
      this.showErrorMessage('Login failed. Please try again.');
    }
  );

   }
   private showErrorMessage(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
      panelClass: ['error-snackbar'], // Add a custom CSS class for styling
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

  
}
