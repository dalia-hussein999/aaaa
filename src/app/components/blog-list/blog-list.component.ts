
import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../../shared/services/blog-api.service';
import { Post } from 'src/app/shared/interface/post.interface';
import { catchError, of } from 'rxjs'; 

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [];
  hasPosts: boolean = true;
  currentPage: number = 1;
  totalItems: number = 60; 
  postsPerPage: number = 9;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private blogApiService: BlogApiService) {}

  ngOnInit(): void {
    this.fetchPosts(this.currentPage);
  }

  fetchPosts(page: number): void {
    this.isLoading = true; 
    this.error = null;
    this.blogApiService.getPosts(page, this.postsPerPage).pipe(
      catchError((error) => {
        this.isLoading = false;
        this.error = 'An error occurred while fetching posts.'; 
        return of([]); 
      })
    ).subscribe((posts) => {
      this.posts = posts;
      this.hasPosts = posts.length > 0;
      this.isLoading = false;
    });
  }

  retry(): void {
    this.fetchPosts(this.currentPage);
  }
  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.fetchPosts(newPage);
  }
  

  
  nextPage(): void {
    this.onPageChange(this.currentPage + 1);
  }

  previousPage(): void {
    this.onPageChange(Math.max(1, this.currentPage - 1));
  }
}
