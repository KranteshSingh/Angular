import { Injectable } from '@angular/core';

// Importing HttpClient & HttpErrorResponse to make the REST API requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// Importing Observables for handling the response of HTTP requests
import { Observable } from 'rxjs';
// Importing catchError & tap operators from rxjs.
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs'
  public authToken = 'OWI1MmMyMmUxY2U0YzA4NmFmNjNiNTI3MGNkNTYyYzJkMTRlZTI2NGEyMWRhOGVjOTQ1MzkwNjg0MzEyNjE4NmU0MjNmNmQzZjAxYmJjM2E4ZjkyNjhiZmM2OGEyY2NlYzM5ZjQ1ZmU3NDRmOGJmMzkyOGI3NGJkNzA1MTA5OGM0NQ=='

  constructor(private _http: HttpClient) {
    console.log('blog-http service was called for using REST API')
  }

  // This is default error handler which we have to use in application
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  // Getting all blogs for HomePage
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all' + '?authToken=' + this.authToken)
    console.log(myResponse);
    return myResponse
  }
  // Getting a single blog Information using its blogId and show case in blog-view component
  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken)
    return myResponse;
  }

  createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  } // end create blog

  deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;

  }// end delete blog

  editBlog(blogId, blogData): any {


    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }// end delete blog

}