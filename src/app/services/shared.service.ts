import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostModel } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    private postsSubject: BehaviorSubject<boolean> = new BehaviorSubject<any>(false);
    posts$ = this.postsSubject.asObservable();

  updatePosts(isPostUpdated:boolean) {
    this.postsSubject.next(isPostUpdated);
  }
}