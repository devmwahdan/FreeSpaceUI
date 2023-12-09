import { Component, Input, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { UserModel } from '../models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
 
})
export class HeaderComponent implements OnInit {
  @Input() userId:any;
  hideActionMenu=false;
  hideActionMenu2: boolean = true;
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
  toggleMenu(){
    this.hideActionMenu2 =!this.hideActionMenu2;

  }
}
