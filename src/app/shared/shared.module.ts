import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautifyDirective } from './directive';
import { LocalStorageService } from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BeautifyDirective,
  ],
  providers: [
    LocalStorageService
  ],
  exports: [
    BeautifyDirective
  ]
})
export class SharedModule { }
