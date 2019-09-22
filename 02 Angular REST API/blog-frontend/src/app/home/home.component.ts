import { Component, OnInit, OnDestroy } from '@angular/core';

// Importing BlogHttpService to use functions defined there
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public allBlogs = [];
  public errorMessage: any;

  constructor(private blogHttpService: BlogHttpService) {
    console.log('Home component constructor called');
  }

  // ngOnInit is lifecycle and will be initialised as soon as home component is called.
  ngOnInit() {
    console.log('Home component ngOnInit called');
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data['data'];
        return this.allBlogs;
      },

      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
    console.log(this.allBlogs);
  }

  ngOnDestroy() {
    console.log('Home Component ngOnDestroy called');
  }
}
