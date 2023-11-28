import { Injectable } from '@angular/core';
import {ApiHelperService} from "./api-helper.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";


export class GenericHttpService<TDto, TFilter>  {
  constructor(
    protected endpoint: string,
    protected apiHepler: ApiHelperService
  ) { }

  public create(item: TDto): Observable<TDto> {
    return this.apiHepler.post<TDto, TDto>(`${this.endpoint}`, item);
  }

  public update(item: TDto): Observable<TDto> {
    return this.apiHepler.put<TDto, TDto>(`${this.endpoint}`, item);
  }

  get(id: number): Observable<TDto> {
    return this.apiHepler.get<TDto>(`${this.endpoint}/${id}`);
  }


  getAll(): Observable<TDto[]> {
    return this.apiHepler.get<TDto[]>(`${this.endpoint}`);
  }


 /* search(search: SearchPageDto<TFilter>): Observable<PagedDataDto<TDto>> {
    return this.apiHepler.post<SearchPageDto<TFilter>, PagedDataDto<TDto>>(`${this.endpoint}/search`, search);
  }*/


  delete(id: number){
    return this.apiHepler.delete<TDto>(`${this.endpoint}/${id}`, new HttpParams());
  }

}
