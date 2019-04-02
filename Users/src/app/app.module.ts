import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './Controllers/user-list/user-list.component';
import { MainHeadComponent } from './Controllers/main-head/main-head.component';
import {HttpClientModule} from '@angular/common/http';
import { ServUsersComponent } from './Services/serv-users/serv-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MainHeadComponent,
    ServUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
