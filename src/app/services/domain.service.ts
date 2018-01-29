import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationOutput} from "../models/pagination-output";
import {Observable} from "rxjs";
import { Domain } from '../models/domain.model';


@Injectable()
export class DomainService {

  constructor(private http: HttpClient) {
  }

  load(params: any): Observable<PaginationOutput> {
    let parameters: HttpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      let value = params[key];
      parameters = parameters.set(key, value);
    });
    return this.http.get<PaginationOutput>('domains', {params: parameters});
  }

  store(item: Domain): Observable<Domain> {
    return this.http.post<Domain>('domains', item);
  }

  update(item: Domain): Observable<Domain> {
    return this.http.put<Domain>(`domains/${item.id}`, item);
  }


  destroy(id: number) {
    return this.http.delete(`domains/${id}`);
  }

}
