import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { PostModel } from '../models/post-model';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { LikeModel } from '../models/like-model';
import { SharedService } from '../services/shared.service';
import { CommentModel } from "../models/comment-model";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  commentForm: FormGroup;
  user: UserModel;
  post: PostModel;
  postModelList: PostModel[] = [];
  isCurrentPostLiked = false;
  @Input() userId: any;
  constructor(private postService: PostService, private sharedService: SharedService, private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      content: '',
    });
  }

  ngOnInit(): void {

    this.sharedService.posts$.subscribe((isPosCreated) => {
      if (isPosCreated) {
        this.getPosts();
      }
    });

    let postStorge = localStorage.getItem('post');
    this.user = postStorge ? JSON.parse(postStorge) : null;
    let userStorge = localStorage.getItem('user');
    this.user = userStorge ? JSON.parse(userStorge) : null;

    if (this.userId == null) {

      this.getPosts();
    }
    else {
      this.getUserPosts(this.userId)
    }

  }

  getPosts() {
    this.postService.getPost().subscribe(async result => {
      debugger
      this.postModelList = result;
      console.log(result);

    });

  }
  getUserPosts(userId: any) {

    this.postService.getPostByUser(userId).subscribe(async result => {
      debugger
      this.postModelList = result;
      console.log(result);

    });

  }
  makeLike(post: any) {

    let likeModel = new LikeModel();
    likeModel.postId = post.postId;
    this.postService.makeLike(likeModel).subscribe(async result => {

      if (result == true) {

        post.isLiked = true
        post.likesCount += 1;
      }

    });
  }

  makeDislike(post: any) {

    let likeModel = new LikeModel();
    likeModel.postId = post.postId;
    this.postService.makeDisLike(likeModel).subscribe(async result => {

      if (result == true) {

        post.isLiked = false
        post.likesCount -= 1;

      }

    });
  }
  addComment(post: any) {
    debugger
    let commentModel = new CommentModel();
    var formValue = this.commentForm.value;
    commentModel.content = formValue.content;
    commentModel.postId = post.postId;
    this.postService.makeComment(commentModel).subscribe(async result => {
      debugger
      if (result == true) {
        formValue.content = '';
        this.commentForm.reset();
      }
    });
  }

  toggleCommentSection(post: any): void {
    post.comments = !post.comments;
  }
}
