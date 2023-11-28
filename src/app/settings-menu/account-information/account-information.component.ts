import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountInfo } from '../../models/Account-Info.model';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrl: './account-information.component.scss'
})
export class AccountInformationComponent {
  AccountInfo:AccountInfo=new AccountInfo();
  AccountForm:FormGroup;
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder){
    this.AccountForm = this.fb.group({
      username:'',
       phoneNumber: ['', Validators.minLength(10)],

     });
  }


  Save(){
    this.AccountInfo.username = "";
    this.AccountInfo.phoneNumber = "";
    this.authService.login(this.AccountInfo).subscribe(res => {
      this.router.navigateByUrl('home/manage');

    });

  }
}
