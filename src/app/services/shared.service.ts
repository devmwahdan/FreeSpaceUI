import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostModel } from '../models/post-model';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private  authService:AuthService ) {
  }
    private postsSubject: BehaviorSubject<boolean> = new BehaviorSubject<any>(false);
    posts$ = this.postsSubject.asObservable();


  private profileSubject: BehaviorSubject<boolean> = new BehaviorSubject<any>(false);
  profile$ = this.profileSubject.asObservable();

  updatePosts(isPostUpdated:boolean) {
    this.postsSubject.next(isPostUpdated);
  }
 
  updateProfile(isProfileUpdated:boolean) {

    this.authService.getUser().subscribe(async res => {

      if (res.token) {
        localStorage.setItem('jwt', res.token);
        const userObj = JSON.stringify(res);
        localStorage.setItem('user',userObj);

      } else {
        debugger
        // Clear JWT token from local storage
        localStorage.removeItem('jwt');
      }
    });

    this.profileSubject.next(isProfileUpdated);
  }
}
