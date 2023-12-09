import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostModel } from '../models/post-model';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { UserModel } from '../models/user-model';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-mange-post',
  templateUrl: './mange-post.component.html',
  styleUrl: './mange-post.component.scss'
})

export class MangePostComponent  implements OnInit{
  user:UserModel;
  postForm:FormGroup;

  constructor( private router: Router,
     private fb: FormBuilder,
      private postService: PostService,
      private sharedService: SharedService){
     // Initialize the form in the constructor
     this.postForm = this.fb.group({
      content:''
    });
}
ngOnInit(): void {
  let userStorge=localStorage.getItem('user');
  this.user  = userStorge ? JSON.parse(userStorge) : null;



 }

Post(){
  let formValue=this.postForm.value;
  let postModel=new PostModel();
  postModel.content =formValue.content;

  this.postService.create(postModel).subscribe(async result => {
    formValue.content = '';
    this.postForm.reset();
    this.sharedService.updatePosts(true);
    //this.router.navigateByUrl('home/manage');
  });
}
}
