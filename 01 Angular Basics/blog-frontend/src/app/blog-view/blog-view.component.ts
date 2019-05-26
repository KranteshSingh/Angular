import { Component, OnInit, OnDestroy } from '@angular/core';

//importing activated route to access information from the current url
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';



@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {


  public currentBlog;


  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService) {
    console.log("blog-view constructor is called")
  }

  ngOnInit() {
    console.log("blog-view ngOnIt Called");
    // getting the blog id from the url
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this blogId out of the overall array/
    this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
  }

  ngOnDestroy() {
    console.log("blog-view ngOnDestroy called.")
  }


}
