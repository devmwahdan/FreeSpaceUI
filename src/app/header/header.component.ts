import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { UserModel } from '../models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  hideActionMenu=false;
  user:UserModel;
  constructor(private router: Router){

  }
  ngOnInit(): void {
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;

   }

   settingsMenuToggle(){
    this.hideActionMenu =!this.hideActionMenu;
   }
   viewUserDetail() {
    this.router.navigate(['/ProfilePage', this.user.id]);
  }
}
