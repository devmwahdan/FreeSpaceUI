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
      fileUploadCover:''

    });
  }
  UpdatePFP(){
    var fileValue=this.ChangePFP.value;
    this.ChangePFPModel.file =fileValue.fileUploadPic;
    this.ChangePFPModel.file =fileValue.fileUploadCover;
    this.authService.UpdatePFP(this.ChangePFPModel).subscribe(res => {
      this.router.navigateByUrl('profile');

    });
  }
}
