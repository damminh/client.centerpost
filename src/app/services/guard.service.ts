import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {StorageService} from "./storage.service";
import {Observable} from "rxjs";

@Injectable()
export class GuardService implements CanActivate,CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    let token = this.storage.get('token');
    if (token) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.canActivate(childRoute, state);
  }

  constructor(private storage: StorageService, private router: Router) {
  }

}
