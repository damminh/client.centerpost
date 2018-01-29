import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class TemplateService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    let params: HttpParams = new HttpParams().set('postId', '1');
    return this.http.get(`${environment.api_url}/comments`, {params: params});
  }

}
