import { Component, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import Post from '../models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {

  post?: Post;
  editAuthor = true;
  editTitle = true;
  loading = true;
  originalTitle!: string;

  editPost(form: NgForm) {

  }
}
