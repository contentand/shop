import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

  constructor(private constants: Constants) { }

  getApplication(): string {
    return this.constants.application;
  }

  getVersion(): string {
    return this.constants.version;
  }

}

export class Constants {
  constructor(
    public application: string,
    public version: string
  ) {}
}
