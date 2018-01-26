import { Injectable } from '@angular/core';
import { ConfigOptions } from '../model';

@Injectable()
export class ConfigOptionsService {

  private options: ConfigOptions = new ConfigOptions();

  constructor() { }

  setOptions(options: ConfigOptions): void {
    this.options = options;
  }

  getConfigOptions(): ConfigOptions {
    return this.options;
  }

}
