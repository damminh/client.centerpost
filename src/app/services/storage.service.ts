import {Injectable} from '@angular/core';
@Injectable()
export class StorageService {
  get(key: string): string {
    return window.localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  delete(key: string): void {
    window.localStorage.removeItem(key);
  }

}
