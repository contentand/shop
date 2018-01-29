import { Injectable, InjectionToken } from '@angular/core';

export const RANDOM_STRING = new InjectionToken<string>('RANDOM_STRING');

export function GeneratorService(length: number) {
  const data = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return function() {
    let result = '';
    for (let x = 0; x < length; x++) {
      result += data[Math.floor(Math.random() * data.length)];
    }
    return result;
  };
}
