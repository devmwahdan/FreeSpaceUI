import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'profilePage',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePage implements OnInit{
  user:UserModel;
  ngOnInit(): void {
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;
   } 

}