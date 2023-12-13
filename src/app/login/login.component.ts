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
      if (res.token) {
        debugger
        localStorage.setItem('jwt', res.token);
        const userObj = JSON.stringify(res);
        localStorage.setItem('user',userObj);
        console.log(res);

        this.router.navigateByUrl('home/manage');

      } else {
        debugger
        // Clear JWT token from local storage
        localStorage.removeItem('jwt');
        
      }
    },
    (error) => {
      this.showPopup('Error', 'Login failed. Please try again.');
    }
  );
 }


  
   Register(){
    var formValue = this.registerationForm.value;
    this.RegisterModel.FirstName=formValue.firstname;
    this.RegisterModel.LastName=formValue.lastname;
    this.RegisterModel.Email=formValue.email;
    this.RegisterModel.Password=formValue.password;
    this.RegisterModel.DateOfBirth=formValue.dateOfBirth;
    if (formValue.gender === "female") {
      this.RegisterModel.Gender = formValue.gender = 2;
    } else if (formValue.gender === "male") {
      this.RegisterModel.Gender = formValue.gender = 1;
    }
    this.RegisterModel.Gender=formValue.gender;
    this.authService.Register(this.RegisterModel).subscribe(res=>{
      debugger
      localStorage.setItem('jwt',res.token);
        // Registration successful
       
        this.showPopup('Success', 'Registration successful. Redirecting to login...');
        // Reset the form after successful registration
        this.registerationForm.reset();
        // Redirect to login after a short delay (you might want to use a router event to handle this more elegantly)
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 2000);
      },
      (error) => {
        this.showPopup('Error', 'Registration failed. Please try again.');
      }
    );
   }
   showPopup(title: string, message: string) {
    // Implement your popup logic here (e.g., using a library or custom component)
    alert(`${title}\n${message}`);
  }
  
}
