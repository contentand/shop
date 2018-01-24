import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautifyDirective } from './directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BeautifyDirective
  ],
  exports: [
    BeautifyDirective
  ]
})
export class SharedModule { }
