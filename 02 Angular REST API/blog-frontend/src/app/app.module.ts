import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importing RouterModule, Routes so that we can implement Routing to different pages on our site.
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// Importing HttpClientModule in app.module.ts so that we can create http service in all the component.
import { HttpClientModule } from '@angular/common/http';
// Importing FormsModule so that we can use functioalities of forms
import { FormsModule } from '@angular/forms';
// Importing BrowserAnmationModule so that we can use any kind of animation using JS & CSS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Importing ToastrModule so that we can notify users with a message enclosed in a toast
import { ToastrModule } from 'ngx-toastr';
// Importing Default Shell Component of the whole Angular Application
import { AppComponent } from './app.component';
// Importing Component that we have created. It is must to import user created component.
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
// Importing Blog-HTTP Service so that we can seprate the http functionalities solely.
import { BlogHttpService } from './blog-http.service';

// Decorator
@NgModule({
  // Every componet should have entry in declaration array
  declarations: [
    AppComponent,

    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],

  // 3rd party modules should be added in imports array
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'blog/:blogId', component: BlogViewComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],

  // Import Angular Service in Providers Array
  providers: [BlogHttpService],
  // By default which component should be start by default
  bootstrap: [AppComponent]
})
export class AppModule {}
