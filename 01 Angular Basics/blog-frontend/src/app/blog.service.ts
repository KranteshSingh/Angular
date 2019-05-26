import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModifies": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": "true",
      "views": 0,
      "bodyHtml": "This is blog body",
      "description": "this a blog 1 description",
      "title": "this is title of Blog 1"
    },
    {
      "blogId": "2",
      "lastModifies": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": "true",
      "views": 0,
      "bodyHtml": "This is blog body",
      "description": "this a blog 2 description",
      "title": "this is title of Blog 2"
    },
    {
      "blogId": "3",
      "lastModifies": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": "true",
      "views": 0,
      "bodyHtml": "This is blog body",
      "description": "this a blog 3 description",
      "title": "this is title of Blog 3"
    },
  ]

  public currentBlog;


  constructor() {

    console.log("Service constructor is called")

  }
  // method to return all the blog
  public getAllBlogs(): any {
    return this.allBlogs;
  }
  // method to get a particular blog. 
  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }
}
