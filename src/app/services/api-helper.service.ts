import { Injectable } from '@angular/core';
import {environment} from "../../environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {finalize, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  private baseUrl = environment.ServiceUrl;

  constructor(private http: HttpClient) { }

  post<TData, TResponse>(uri: string, data: TData, params = new HttpParams()): Observable<TResponse> {
    let headers = new HttpHeaders();

    let url = this.baseUrl + uri;
    return this.http.post(url, data, { params: params, headers: headers }).
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

    let url =this.baseUrl + uri;
    return this.http.post(url, data, { params: params, headers: headers, responseType: 'text' }).
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

  postFile(formData: FormData, options: {
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
    return this.http.post(this.baseUrl + 'attachment', formData, options);
  }

  put<TData, TResponse>(uri: string, data: TData, params = new HttpParams()): Observable<TResponse> {
    let headers = new HttpHeaders();

    let url =this.baseUrl + uri;
    return this.http.put(url, data, { params: params, headers: headers }).
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

    let url =  this.baseUrl + uri;
    return this.http.get(url, { params: params, headers: headers }).
    pipe(map((res: any) => { return this.handleSuccess(res); })
      , catchError((error: HttpErrorResponse) => { return this.handelError(error); })
      , finalize(() => { this.handleFinally(); }));
  }

  delete<TResponse>(uri: string, params = new HttpParams()): Observable<TResponse> {
    let headers = new HttpHeaders();
    let url =  this.baseUrl + uri;
    return this.http.delete(url, { params: params, headers: headers }).
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

    let url =this.baseUrl + uri;
    return this.http.get(url, { responseType: 'blob', headers: headers });
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
