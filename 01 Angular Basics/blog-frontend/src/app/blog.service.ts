import { Injectable } from '@angular/core';

// decorator, now this service can be injected into any component of out application such as HomeComponent | BlogViewComponent
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // allBlogs is a property of class BlogService
  // allBlogs is an array of object with 3 Objects
  // temporary storing data into allBlogs
  public allBlogs = [
    {
      blogId: '1',
      lastModifies: '2017-10-20T12:20:47.854Z',
      created: '2017-10-20T12:20:47.854Z',
      tags: [],
      author: 'Admin',
      category: 'Comedy',
      isPublished: 'true',
      views: 0,
      bodyHtml: 'This is blog body',
      description: 'this a blog 1 description',
      title: 'Hidden tips for bodybuilding'
    },
    {
      blogId: '2',
      lastModifies: '2017-10-20T12:20:47.854Z',
      created: '2017-10-20T12:20:47.854Z',
      tags: [],
      author: 'Admin',
      category: 'Comedy',
      isPublished: 'true',
      views: 0,
      bodyHtml: 'This is blog body',
      description: 'this a blog 2 description',
      title: 'Top 10 Benefits of Yoga & Meditation'
    },
    {
      blogId: '3',
      lastModifies: '2017-10-20T12:20:47.854Z',
      created: '2017-10-20T12:20:47.854Z',
      tags: [],
      author: 'Admin',
      category: 'Comedy',
      isPublished: 'true',
      views: 0,
      bodyHtml: 'This is blog body',
      description: 'this a blog 3 description',
      title: 'How you can become successful'
    }
  ];

  public currentBlog;
  // constructor is a special method of class BlogService which is used to initialize an object
  constructor() {
    console.log('Service constructor is called');
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
