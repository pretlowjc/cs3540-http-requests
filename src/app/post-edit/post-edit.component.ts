import { Component, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Post from '../models/post.model';
import { BlogService } from '../blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {
  post: Post = { id: '', title: '', contents: '', author: '', dates: [] }; // Initialize with an empty post

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.blogService.getPostByTitle(title).subscribe(result => {
        this.post = result.post;
      });
    }
  }

  editPost(form: NgForm) {
    if (form.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const editedPost: Post = {
          id: '', // The ID will be generated by the server
          title: form.value.title,
          contents: form.value.contents,
          author: form.value.author,
          dates: form.value.date, // You might need to handle this differently based on your data model
        };

        this.blogService.editPost(id, editedPost).subscribe(() => {
          // After editing, navigate back to the blog page
          this.router.navigate(['/blog']);
        });
      }
    }
  }
}
