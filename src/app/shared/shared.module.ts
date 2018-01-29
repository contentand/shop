import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautifyDirective } from './directive';
import { LocalStorageService, ConstantsService, Constants, RANDOM_STRING, GeneratorService } from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BeautifyDirective,
  ],
  providers: [
    LocalStorageService,
    {provide: ConstantsService, useValue: new ConstantsService(new Constants('Shop', '1.0.0'))},
    {provide: RANDOM_STRING, useFactory: GeneratorService(4)}
  ],
  exports: [
    BeautifyDirective
  ]
})
export class SharedModule { }
