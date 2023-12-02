import { Injectable } from '@angular/core';
import {ApiHelperService} from "./api-helper.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";


export class GenericHttpService<T>  {
  constructor(
    protected endpoint: string,
    protected apiHepler: ApiHelperService
  ) { }

  public create(item: T): Observable<T> {
    return this.apiHepler.post<T, T>(`${this.endpoint}`, item);
  }

  public update(item: T): Observable<T> {
    return this.apiHepler.put<T, T>(`${this.endpoint}`, item);
  }

  get(id: number): Observable<T> {
    return this.apiHepler.get<T>(`${this.endpoint}/${id}`);
  }


  getAll(): Observable<T[]> {
    return this.apiHepler.get<T[]>(`${this.endpoint}`);
  }


 /* search(search: SearchPageDto<TFilter>): Observable<PagedDataDto<T>> {
    return this.apiHepler.post<SearchPageDto<TFilter>, PagedDataDto<T>>(`${this.endpoint}/search`, search);
  }*/


  delete(id: number){
    return this.apiHepler.delete<T>(`${this.endpoint}/${id}`, new HttpParams());
  }

}
