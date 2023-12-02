import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profilePage',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePage implements OnInit{
  user:UserModel;
  userId: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;
    
    this.userId = this.route.snapshot.paramMap.get('id');

   } 

}