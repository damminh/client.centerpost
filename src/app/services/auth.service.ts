import {Injectable} from '@angular/core';
import {Account} from "../models/account.model";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/do';
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user: Account): Observable<{name: string,token: string}> {
    return this.http.post<{name: string,token: string}>('login', user);
  }

}
