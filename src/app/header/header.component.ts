import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  hideActionMenu=false;
  user:UserModel;
  ngOnInit(): void {
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;

   }

   settingsMenuToggle(){
    this.hideActionMenu =!this.hideActionMenu;
   }
}
