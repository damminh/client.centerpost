import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationOutput} from "../models/pagination-output";
import {Observable} from "rxjs";
import { Type } from '../models/type.model';


@Injectable()
export class TypeService {

  constructor(private http: HttpClient) {
  }

  load(): Observable<Type[]> {
    return this.http.get<Type[]>('types');
  }

}
