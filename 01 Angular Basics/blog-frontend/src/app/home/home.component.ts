import { Component, OnInit, OnDestroy } from '@angular/core';
// Importing BlogService so that we can use the functionalities defined there
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public allBlogs;

  constructor(public blogService: BlogService) {
    console.log('Home component constructor called');
  }

  // ngOnInit is lifecycle, so when we load home component it will execute first same as you see a loader on a website
  ngOnInit() {
    console.log('Home component ngOnInit called');
    this.allBlogs = this.blogService.getAllBlogs();
    console.log(this.allBlogs);
  }

  // ngOnDestroy is lifecycle, it will be called when we move away from the homeComponent similar to moving to another page
  ngOnDestroy() {
    console.log('Home component ngOnDestroy called');
  }
}
