import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationOutput} from "../models/pagination-output";
import {Observable} from "rxjs";
import { Member } from '../models/member.model';


@Injectable()
export class MemberService {

  constructor(private http: HttpClient) {
  }

  load(params: any): Observable<PaginationOutput> {
    let parameters: HttpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      let value = params[key];
      parameters = parameters.set(key, value);
    });
    return this.http.get<PaginationOutput>('members', {params: parameters});
  }

  loadWithJudge(params: any): Observable<any> {
    let parameters: HttpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      let value = params[key];
      parameters = parameters.set(key, value);
    });
    return this.http.get<any>('member-list-judge', {params: parameters});
  }

  store(item: Member): Observable<Member> {
    return this.http.post<Member>('members', item);
  }

  update(item: Member): Observable<Member> {
    return this.http.put<Member>(`members/${item.id}`, item);
  }


  destroy(id: number) {
    return this.http.delete(`members/${id}`);
  }

}
