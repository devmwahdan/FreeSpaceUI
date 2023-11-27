import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ChangePFPModel } from '../../models/Change-PFP.model';
@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrl: './change-profile.component.scss'
})
export class ChangeProfileComponent {
  ChangePFP:FormGroup;
  ChangePFPModel:ChangePFPModel=new ChangePFPModel();
  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder){
    this.ChangePFP = this.fb.group({
      fileUploadPic: '',
     
    });
  }
  UpdatePFP(){
    this.ChangePFPModel.file = "";
    this.authService.login(this.ChangePFPModel).subscribe(res => {
      localStorage.setItem('jwt', res.token);
      this.router.navigateByUrl('profile');

    });
  }
}
