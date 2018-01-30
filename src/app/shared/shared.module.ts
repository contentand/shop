import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautifyDirective, SelectableDirective } from './directive';
import { LocalStorageService, ConstantsService, Constants, RANDOM_STRING, GeneratorService } from './service';
import { OrderByPipe } from './pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BeautifyDirective,
    SelectableDirective,
    OrderByPipe,
  ],
  providers: [
    LocalStorageService,
    {provide: ConstantsService, useValue: new ConstantsService(new Constants('Shop', '1.0.0'))},
    {provide: RANDOM_STRING, useFactory: GeneratorService(4)}
  ],
  exports: [
    BeautifyDirective,
    SelectableDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
