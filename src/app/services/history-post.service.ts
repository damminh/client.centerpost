import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationOutput} from "../models/pagination-output";
import {Observable} from "rxjs";
import { HistoryPost } from '../models/history-post.model';


@Injectable()
export class HistoryPostService {

  constructor(private http: HttpClient) {
  }

  load(post_id: number): Observable<HistoryPost[]> {
    return this.http.get<HistoryPost[]>(`history-post/${post_id}`);
  }

}
