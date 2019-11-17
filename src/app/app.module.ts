import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
