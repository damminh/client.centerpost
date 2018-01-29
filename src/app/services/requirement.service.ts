import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationOutput} from "../models/pagination-output";
import {Observable} from "rxjs";
import { Requirement } from '../models/requirement.model';


@Injectable()
export class RequirementService {

  constructor(private http: HttpClient) {
  }

  load(params: any): Observable<PaginationOutput> {
    let parameters: HttpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      let value = params[key];
      parameters = parameters.set(key, value);
    });
    return this.http.get<PaginationOutput>('requirements', {params: parameters});
  }

  store(item: Requirement): Observable<Requirement> {
    return this.http.post<Requirement>('requirements', item);
  }

  update(item: Requirement): Observable<Requirement> {
    return this.http.put<Requirement>(`requirements/${item.id}`, item);
  }


  destroy(id: number) {
    return this.http.delete(`requirements/${id}`);
  }

}
