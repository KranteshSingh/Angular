import { Component, OnInit, OnDestroy } from '@angular/core';
// Importing activated route to access information from the current url
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
// Importing ToastrService so that we can display alert messages in a beautiful manner
import { ToastrService } from 'ngx-toastr';
// Importing Location Module so that our application should have page history to move back or forward
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {
  public currentBlog;

  constructor(
    private _route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public blogHttpService: BlogHttpService,
    public toastr: ToastrService
  ) {
    console.log('blog-view constructor is called');
  }

  ngOnInit() {
    console.log('blog-view ngOnIt Called');

    // Getting the blog id from the url
    let myBlogId = this._route.snapshot.paramMap.get('blogId');

    // Calling the function to get the single blog information with this blogId out of the overall blogs.
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data['data'];
      },
      error => {
        console.log('Some error occured');
        console.log(error.error.Message);
      }
    );
  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog Deleted Successfully', 'Success');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }
    );
  }

  goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log('blog-view ngOnDestroy called.');
  }
}
