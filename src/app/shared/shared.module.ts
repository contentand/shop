import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautifyDirective } from './directive';
import { LocalStorageService, ConstantsService, Constants } from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BeautifyDirective,
  ],
  providers: [
    LocalStorageService,
    {provide: ConstantsService, useValue: new ConstantsService(new Constants('Shop', '1.0.0'))}
  ],
  exports: [
    BeautifyDirective
  ]
})
export class SharedModule { }
