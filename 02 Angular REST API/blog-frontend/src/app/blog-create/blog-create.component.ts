import { Component, OnInit } from '@angular/core';
// Importing BlogHttpService so that we can use functions defined there
import { BlogHttpService } from '../blog-http.service';
// Importing ActivatedRoute, Router so that we can access the current BlogId
import { ActivatedRoute, Router } from '@angular/router';
// Importing ToastrService so that we can display beautiful alert messages
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  constructor(
    private blogHttpService: BlogHttpService,
    private _route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = [
    'Comedy',
    'Drama',
    'Action',
    'Technology',
    'History'
  ];

  ngOnInit() {}

  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    };

    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log('Blog Created');
        console.log(data);
        this.toastr.success('Blog Posted Successfully', 'Success');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 1000);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }
    );
  }
}
