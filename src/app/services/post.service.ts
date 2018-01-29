import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationOutput} from "../models/pagination-output";
import {Observable} from "rxjs";
import { Post } from '../models/post.model';


@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  load(params: any): Observable<PaginationOutput> {
    let parameters: HttpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      let value = params[key];
      parameters = parameters.set(key, value);
    });
    return this.http.get<PaginationOutput>('posts', {params: parameters});
  }

  store(item: Post): Observable<Post> {
    return this.http.post<Post>('posts', item);
  }

  update(item: Post): Observable<Post> {
    return this.http.put<Post>(`posts/${item.id}`, item);
  }


  destroy(id: number) {
    return this.http.delete(`posts/${id}`);
  }

}
