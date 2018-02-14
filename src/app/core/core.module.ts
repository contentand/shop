import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './component/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from './service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [LocalStorageService],
  declarations: [NavigationComponent],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
