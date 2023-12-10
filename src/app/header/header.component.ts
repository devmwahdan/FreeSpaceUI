import { Component, Input, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { UserModel } from '../models/user-model';
import { Router } from '@angular/router';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {
  @Input() userId:any;
  hideActionMenu=false;
  hideActionMenu2: boolean = true;
  user:UserModel;
  constructor(private router: Router, private sharedService: SharedService){

  }
  ngOnInit(): void {
    debugger
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;

    this.sharedService.profile$.subscribe((isPosCreated) => {
      if(isPosCreated) {
        let userStorge=localStorage.getItem('user');
        this.user  = userStorge ? JSON.parse(userStorge) : null;
      }
    });

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
