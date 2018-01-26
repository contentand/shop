import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, item: any): void {
    window.localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): any {
    return JSON.parse(window.localStorage.getItem(key));
  }

  removeItem(key: string): any {
    const item = this.getItem(key);
    window.localStorage.removeItem(key);
    return item;
  }

}
