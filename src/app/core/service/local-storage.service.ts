import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, item: Object): void {
    window.localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): Object {
    return JSON.parse(window.localStorage.getItem(key));
  }

  removeItem(key: string): Object {
    const item = this.getItem(key);
    window.localStorage.removeItem(key);
    return item;
  }

}
