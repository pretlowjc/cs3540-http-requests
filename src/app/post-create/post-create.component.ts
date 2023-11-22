import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import Post from '../models/post.model'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(private blogService: BlogService, private router: Router) { }

  addPost(form: NgForm) {
    if (form.valid) {
      const post: Post = {
        id: ' ',
        title: form.value.title,
        contents: form.value.contents,
        author: form.value.author,
        dates: form.value.date,
      };

      this.blogService.addPost(post).subscribe(() => {
        this.router.navigate(['/blog']);
      })
    }
  }
}
