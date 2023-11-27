import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { ChangePasswordModel } from '../../models/Change-password.model';
@Component({
  selector: 'changePassword',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  ChangePassword:FormGroup;
  ChangePasswordModel:ChangePasswordModel=new ChangePasswordModel();
  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder){
    this.ChangePassword = this.fb.group({
      oldPassword: '',
      newPassword:['', [Validators.required],Validators.minLength(8)],
      confirmPassword:['', [Validators.required],Validators.minLength(8)],
    });
  }
  UpdatePassword(){
    this.ChangePasswordModel.oldPassword = "P@ssw0rd";
    this.ChangePasswordModel.newPassword = "P@ssw0rd";
    this.ChangePasswordModel.confirmPassword = "P@ssw0rd";
    this.authService.login(this.ChangePasswordModel).subscribe(res => {
      localStorage.setItem('jwt', res.token);
      this.router.navigateByUrl('login');
    });
  }

}
