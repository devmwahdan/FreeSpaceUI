import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient,) { }


/*  Register(data: RegistrationRequest): any {

    localStorage.removeItem('jwt_otp');
    localStorage.removeItem('jwt');

    return this.httpClient.post('/Auth/registerUser', data);
  }*/

  login(data: any):  Observable<any> {
    debugger
    localStorage.removeItem('jwt');
    return this.httpClient.post('/Auth/Login', data);
  }
 
  Register(data:any):Observable<any>{
    //debugger
    localStorage.removeItem('jwt');
    return this.httpClient.post('/Auth/Register',data);
  }
  Save(data:any):Observable<any>{
    debugger
    return this.httpClient.post('/Auth/Register',data);
  }
  SaveInfo(data:any):Observable<any>{
    debugger
    return this.httpClient.post('/User/updateUserInfo',data);
  }
  UpdatePassword(data:any):Observable<any>{
    return this.httpClient.post('/Auth/Register',data);
  }
  UpdatePFP(data:any):Observable<any>{
    return this.httpClient.post('/Auth/Register',data);
  }
  SaveNotify(data:any):Observable<any>{
    return this.httpClient.post('/Auth/Register',data);
  }

  EventCreation(data:any):Observable<any>{
    return this.httpClient.post('/Auth/Register',data);
  }

  getUser():  Observable<any> {
    //debugger
    return this.httpClient.get('/Auth/getUser');
  }
  Logout(data:any): Observable<any>{
    localStorage.removeItem('jwt');
    return this.httpClient.post('/Auth/Logout', {});
  }

}
