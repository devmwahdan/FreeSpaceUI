import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetails implements OnInit{
  user:UserModel;
  ngOnInit(): void {
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;
   } 

}