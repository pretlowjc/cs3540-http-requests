import { Component } from '@angular/core';
import Post from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  loading = false;
  posts: Array<Post> = [];
  
  deletePost(postTitle: string) {

  }
}
