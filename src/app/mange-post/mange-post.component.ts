import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostModel } from '../models/post-model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-mange-post',
  templateUrl: './mange-post.component.html',
  styleUrl: './mange-post.component.scss'
})

export class MangePostComponent {
  PostModel:PostModel=new PostModel();
  postForm:FormGroup;
  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder, private postService: PostService){
     // Initialize the form in the constructor
     this.postForm = this.fb.group({
      content:''
     
    });

}
Post(){
  var formValue=this.postForm.value;
  this.PostModel.content =formValue.content;
  this.authService.Post(this.PostModel).subscribe(res => {
  this.router.navigateByUrl('home/manage');

  });
}
}
