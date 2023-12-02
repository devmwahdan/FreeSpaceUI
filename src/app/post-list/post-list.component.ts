import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { PostModel } from '../models/post-model';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit{
  user:UserModel;
  postModelList :PostModel[]=[];
  constructor(   private postService: PostService){
  }

  ngOnInit(): void {
    let userStorge=localStorage.getItem('user');
    this.user  = userStorge ? JSON.parse(userStorge) : null;
    this.getPosts();

   }
   
   getPosts(){
    debugger
  this.postService.getPost().subscribe(async result => {
    this.postModelList=result;

  });

  }

}
