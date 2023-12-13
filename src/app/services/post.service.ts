import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiHelperService} from "./api-helper.service";
import {GenericHttpService} from "./generic-http.service";
import {PostModel} from "../models/post-model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService extends GenericHttpService<PostModel>  {

  constructor(private httpClient: HttpClient, private client: ApiHelperService) {
    super("/post", client)
  }
  getPost():  Observable<any> {
  debugger
    return this.httpClient.get('/post/get-posts');
  }

  makeLike(PostModel:any):Observable<any>{
return this.httpClient.post('/post/make-like',PostModel);
  }

  makeDisLike(PostModel:any):Observable<any>{
    return this.httpClient.post('/post/make-disLike',PostModel);
      }


  makeComment(comment:any):Observable<any>{
    debugger
    return this.httpClient.post('/post/make-comment',comment);
  }

      getPostByUser(userId:any):  Observable<any> {
        debugger
        return this.httpClient.get(`/post/get-posts/${userId}`);
      }

  getNotifications():  Observable<any> {
    //debugger
    return this.httpClient.get('/post/get-notification');
  }

}
