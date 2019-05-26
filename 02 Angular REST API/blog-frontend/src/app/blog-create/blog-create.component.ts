import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";

import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  test() {
    this.toastr.success("I'm a toast!", "Success!");
  }
  
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology", "History"]

  ngOnInit() {
  }

  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }// end blog data

    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("Blog Created")
        console.log(data);
        //alert('Blog Posted Successfully');
        this.toastr.success('Blog Posted Successfully', 'Success');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        //alert('some error occured')
        this.toastr.error('Some error occured','Error');
      }
    )
  }
}
