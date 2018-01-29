import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationOutput} from "../models/pagination-output";
import {Observable} from "rxjs";
import { Group } from '../models/group.model';


@Injectable()
export class GroupService {

  constructor(private http: HttpClient) {
  }

  load(params: any): Observable<PaginationOutput> {
    let parameters: HttpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      let value = params[key];
      parameters = parameters.set(key, value);
    });
    return this.http.get<PaginationOutput>('groups', {params: parameters});
  }

  store(item: Group): Observable<Group> {
    return this.http.post<Group>('groups', item);
  }

  update(item: Group): Observable<Group> {
    return this.http.put<Group>(`groups/${item.id}`, item);
  }


  destroy(id: number) {
    return this.http.delete(`groups/${id}`);
  }

}
