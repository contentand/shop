import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AppRoutingModule } from './app.routing.module';
import { AuthenticationService, AuthenticatedUserGuard, AdministratorGuard } from './user';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthenticatedUserGuard, AdministratorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
