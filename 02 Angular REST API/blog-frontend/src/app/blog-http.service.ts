// Injectable is default module from angular core so that we can Inject functionality of services in different angualr component
import { Injectable } from '@angular/core';
// Importing HttpClient & HttpErrorResponse to make the REST API requests, Handling response & Error
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// Importing Observables for handling the response of HTTP requests
import { Observable } from 'rxjs';
// Importing catchError & tap operators from rxjs.
import { catchError, tap } from 'rxjs/operators';

// Service Decorator
@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken =
    'OWI1MmMyMmUxY2U0YzA4NmFmNjNiNTI3MGNkNTYyYzJkMTRlZTI2NGEyMWRhOGVjOTQ1MzkwNjg0MzEyNjE4NmU0MjNmNmQzZjAxYmJjM2E4ZjkyNjhiZmM2OGEyY2NlYzM5ZjQ1ZmU3NDRmOGJmMzkyOGI3NGJkNzA1MTA5OGM0NQ==';

  constructor(private _http: HttpClient) {
    console.log('blog-http service was called for using REST API');
  }

  // This is default error handler which we have to use in application
  private handleError(err: HttpErrorResponse) {
    console.log('Handle error Http calls');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // Getting all blogs for HomePage
  public getAllBlogs(): any {
    let myResponse = this._http.get(
      this.baseUrl + '/all' + '?authToken=' + this.authToken
    );
    console.log(myResponse);
    return myResponse;
  }

  // Getting a single blog Information using its blogId
  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(
      this.baseUrl +
        '/view' +
        '/' +
        currentBlogId +
        '?authToken=' +
        this.authToken
    );
    return myResponse;
  }
  // Creating Blog using REST API
  createBlog(blogData): any {
    let myResponse = this._http.post(
      this.baseUrl + '/create' + '?authToken=' + this.authToken,
      blogData
    );
    return myResponse;
  }

  // Deleting the existing blog by it blogId
  deleteBlog(blogId): any {
    let data = {};
    let myResponse = this._http.post(
      this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken,
      data
    );
    return myResponse;
  } // end delete blog

  // Editing the Existing blog by blogId & providing blogData
  editBlog(blogId, blogData): any {
    let myResponse = this._http.put(
      this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken,
      blogData
    );
    return myResponse;
  }
}
