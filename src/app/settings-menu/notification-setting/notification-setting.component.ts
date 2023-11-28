import { Component } from '@angular/core';
import { NotificationModel } from '../../models/Notification.model';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-notification-setting',
  templateUrl: './notification-setting.component.html',
  styleUrl: './notification-setting.component.scss'
})
export class NotificationSettingComponent {
  NotifyForm:FormGroup;
  NotificationModel:NotificationModel=new NotificationModel();
  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder){
    this.NotifyForm = this.fb.group({
      enableNotifications:''
    });
  }
  SaveNotify(){
    if(this.NotificationModel.enableNotifications =true){
      this.authService.SaveNotify(this.NotificationModel).subscribe(res => {
        this.router.navigateByUrl('home/manage');
  
      });
    }
   
  }
}
