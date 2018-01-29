import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";
import {environment} from "../../environments/environment";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private storage: StorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: HttpHeaders = req.headers.set('Content-Type', 'application/json');
    if (headers.has('uploadFile')) {
      headers = headers.delete('Content-Type').delete('uploadFile');
    }
    let token = this.storage.get('token');
    if (token) {
      headers = headers.set("Authorization", token);
    }
    let url = `${environment.api_url}/${req.url}`;
    const authReq = req.clone({headers: headers, url: url});
    return next.handle(authReq);
  }

}
