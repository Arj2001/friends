import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const addRoute:Routes = [
  {
    path:"",component:ViewFriendsComponent
  },
  {
    path:"add-friend",component:AddFriendsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewFriendsComponent,
    AddFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(addRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
