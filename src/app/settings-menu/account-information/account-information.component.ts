import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountInfo } from '../../models/Account-Info.model';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrl: './account-information.component.scss'
})
export class AccountInformationComponent {
  AccountInfo:AccountInfo=new AccountInfo();
  BasicInfo:FormGroup;
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder){
    this.BasicInfo = this.fb.group({
      mobileNumber:'',
      bio:'',
      nickname:''
     });
  }
  SaveInfo(){
    var formValue = this.BasicInfo.value;
    this.AccountInfo.MobileNumber=formValue.mobileNumber;
    this.AccountInfo.Bio =formValue.bio;
    this.AccountInfo.Nickname =formValue.nickname;
    this.authService.SaveInfo(this.AccountInfo).subscribe(res => {

    this.BasicInfo.reset();
    this.showPopup('Success', 'User Info  successfully Updated .');
    });
   }
   showPopup(title: string, message: string) {
    // Implement your popup logic here (e.g., using a library or custom component)
    alert(`${title}\n${message}`);
   }
}
