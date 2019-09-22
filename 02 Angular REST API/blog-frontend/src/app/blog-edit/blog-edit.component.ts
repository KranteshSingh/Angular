import { Component, OnInit } from '@angular/core';
// Importing ActivatedRoute so that we can get the id from current route
import { ActivatedRoute, Router } from '@angular/router';
// Importing ToastrService to display beautiful alert messages
import { ToastrService } from 'ngx-toastr';
// Importing BlogHttpService so that we can use functions defined there
import { BlogHttpService } from '../blog-http.service';
// Importing Location so that we can use functionality like GoBack
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
  providers: [Location]
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];
  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private toastr: ToastrService,
    private blogHttpService: BlogHttpService
  ) {}

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data['data'];
        console.log('current blog is');
        console.log(this.currentBlog);
      },
      error => {
        console.log('Some error occured');
        console.log(error.errorMessage);
      }
    );
  }

  public editThisBlog(): any {
    this.blogHttpService
      .editBlog(this.currentBlog.blogId, this.currentBlog)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success('Blog edited successfully', 'Success');
          setTimeout(() => {
            this.router.navigate(['/blog', this.currentBlog.blogId]);
          }, 1000);
        },
        error => {
          console.log('Some error occured');
          console.log(error.errorMessage);
          this.toastr.error('Some error occured', 'Error');
        }
      );
  }

  goBackToPreviousPage(): any {
    this.location.back();
  }
}
