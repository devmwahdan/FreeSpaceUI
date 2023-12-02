import { Injectable } from '@angular/core';
import {environment} from "../../environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {finalize, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  

  constructor(private http: HttpClient) { }

  post<TData, TResponse>(uri: string, data: TData, params = new HttpParams()): Observable<TResponse> {
    let headers = new HttpHeaders();
debugger
     
    return this.http.post(uri, data, { params: params, headers: headers }).
    pipe(
      map(
        (res: any) => {
          return this.handleSuccess(res)
        }),
      catchError(
        (error: HttpErrorResponse) => {

          return this.handelError(error)
        }),
      finalize(
        () => {

          this.handleFinally()
        }));
  }

  postBase64<TData>(uri: string, data: TData, params = new HttpParams()): Observable<string> {
    let headers = new HttpHeaders();

    return this.http.post(uri, data, { params: params, headers: headers, responseType: 'text' }).
    pipe(
      map(
        (res: string) => {
          return this.handleSuccess(res)
        }),
      catchError(
        (error: HttpErrorResponse) => {

          return this.handelError(error)
        }),
      finalize(
        () => {

          this.handleFinally()
        }));
  }

  postFile(uri: string, formData: FormData, options: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'arraybuffer';
    withCredentials?: boolean;
  }): Observable<ArrayBuffer> {
    return this.http.post(uri + 'attachment', formData, options);
  }

  put<TData, TResponse>(uri: string, data: TData, params = new HttpParams()): Observable<TResponse> {
    let headers = new HttpHeaders();

    return this.http.put(uri, data, { params: params, headers: headers }).
    pipe(
      map(
        (res: any) => {

          return this.handleSuccess(res)
        }),
      catchError(
        (error: HttpErrorResponse) => {

          return this.handelError(error)
        }),
      finalize(
        () => {

          this.handleFinally()
        }));
  }

  get<TResponse>(uri: string, params = new HttpParams()): Observable<TResponse> {
    let headers = new HttpHeaders();

     return this.http.get(uri, { params: params, headers: headers }).
    pipe(map((res: any) => { return this.handleSuccess(res); })
      , catchError((error: HttpErrorResponse) => { return this.handelError(error); })
      , finalize(() => { this.handleFinally(); }));
  }

  delete<TResponse>(uri: string, params = new HttpParams()): Observable<TResponse> {
    let headers = new HttpHeaders();
    return this.http.delete(uri, { params: params, headers: headers }).
    pipe(
      map(
        (res: any) => {

          return this.handleSuccess(res)
        }),
      catchError(
        (error: HttpErrorResponse) => {

          return this.handelError(error)
        }),
      finalize(
        () => {

          this.handleFinally()
        }));
  }


  getBlob(uri: string) {
    let headers = new HttpHeaders();

    return this.http.get(uri, { responseType: 'blob', headers: headers });
  }


  private handleSuccess<TResponse>(res: TResponse) {
    return res;
  }
  private handelError(error: HttpErrorResponse) {

    if (error.message != undefined) {
      console.log('Inner Exception: ' + error.message);
    }

    return throwError(error);
  }
  private handleFinally() { }


}
