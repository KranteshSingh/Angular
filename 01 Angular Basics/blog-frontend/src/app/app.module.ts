import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importing routing module for navigation to different pages
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// Including different component in app.module.ts so that we can declare it in our decorator
// AppComponent is the shell for the web application
// Apart from AppComponent, We have Home | BlowView | BlogCreate | BlogEdit | About | NotFound |
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
// Importing BlogService so that we can use its functionality in all over the web application
import { BlogService } from './blog.service';

// Below is decorator, it is for the angular to know that we're working on something
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent }, // url for /home
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // this will always redirect to home
      { path: 'about', component: AboutComponent }, // url for /about
      { path: 'blog/:blogId', component: BlogViewComponent }, // url for blog/blogId i.e., route url
      { path: 'create', component: BlogCreateComponent }, // url for /create
      { path: 'edit/:blogId', component: BlogEditComponent }, // url for edit/blogId
      { path: '**', component: NotFoundComponent } // url for 404 pages incase for exception url
    ])
  ],
  providers: [BlogService], // Importing BlogServuce to enable functionality
  bootstrap: [AppComponent] // bootstraping the AppComponent when we run ng serve
})

// Exporting the AppModule Class
export class AppModule {}
