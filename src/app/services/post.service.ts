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
    //debugger
    return this.httpClient.get('/post/get-posts');
  }
}
