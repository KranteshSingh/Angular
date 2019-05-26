import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing toaster module for alert messages. BrowserAnimationModule is a dependency for toaster Module.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Importing HttpClientModule for making Http requests.
import { HttpClientModule } from '@angular/common/http';
// Importing RouterModule for setting up Routing for the application. This is often missed.
import { RouterModule, Routes } from '@angular/router';
// Importing MODULES
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
// Improting component for ROUTING
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([


      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
