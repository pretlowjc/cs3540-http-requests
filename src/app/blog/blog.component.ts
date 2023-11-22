import { Component } from '@angular/core';
import Post from '../models/post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts: Post[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPosts().subscribe(result => {
      this.posts = result.post;
    });
  }

  deletePost(id: string) {
    this.blogService.deletePost(id).subscribe(() => {
      // After deleting, refresh the posts
      this.getPosts();
    });
  }
}
