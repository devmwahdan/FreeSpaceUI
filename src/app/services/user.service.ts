import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiHelperService} from "./api-helper.service";
import {GenericHttpService} from "./generic-http.service";
import {PostModel} from "../models/post-model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericHttpService<PostModel>  {

  constructor(private httpClient: HttpClient, private client: ApiHelperService) {
    super("/user", client)
  }


  getSuggestedFriends():  Observable<any> {
    //debugger
    return this.httpClient.get('/user/getNonFriends');
  }

  getPendingFriends():  Observable<any> {
    //debugger
    return this.httpClient.get('/user/getPendingFriends');
  }

  addFriend(friend:any):Observable<any>{
    return this.httpClient.post('/user/add-friend',friend);
  }

  responseFriend(friend:any):Observable<any>{
    return this.httpClient.post('/user/aceept-reject-friend',friend);
  }

}
