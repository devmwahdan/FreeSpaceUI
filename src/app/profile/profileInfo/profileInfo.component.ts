import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
@Component({
  selector: 'profileInfo',
  templateUrl: './profileInfo.component.html',
  styleUrl: '././profileInfo.component.scss'
})
export class ProfileInfo implements OnInit {
  user:UserModel;

  ngOnInit(): void {
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;
  }
  @Input() userId: any;

}