import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { httpInterceptorProviders } from './http-interceptors/http-interceptors';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserShowComponent } from './components/user-show/user-show.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
