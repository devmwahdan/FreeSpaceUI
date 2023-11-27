import { Component } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";
import { ChangeBasicInfoModel } from '../../models/change-info-model';

@Component({
  selector: 'app-change-basic-info',
  templateUrl: './change-basic-info.component.html',
  styleUrl: './change-basic-info.component.scss'
})
export class ChangeBasicInfoComponent {
  BasicInfo:FormGroup;
  ChangeBasicInfoModel:ChangeBasicInfoModel=new ChangeBasicInfoModel();

  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder){
    // Initialize the form in the constructor
    this.BasicInfo = this.fb.group({
     bio:'',
     nickname:''
   });
  }
   SaveInfo(){
    this.ChangeBasicInfoModel.Bio = "";
    this.ChangeBasicInfoModel.Nickname = "";
    this.authService.SaveInfo(this.ChangeBasicInfoModel).subscribe(res => {
      localStorage.setItem('jwt', res.token);
      this.router.navigateByUrl('home/manage');

    });

   }

}

