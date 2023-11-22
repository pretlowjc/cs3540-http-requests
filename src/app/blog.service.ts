import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Post from '../app/models/post.model';

@Injectable({
    providedIn: 'root'
})

export class BlogService {
    private apiEndpoint = 'http://localhost:3000/api/blog';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<{ post: Post[] }> {
        return this.http.get<{ post: Post[] }>(`${this.apiEndpoint}`);
    }

    getPostByTitle(title: string): Observable<{ post: Post | null }> {
        return this.http.get<{ post: Post | null }>(`${this.apiEndpoint}/${title}`);
    }

    addPost(post: Post): Observable<{ post: Post }> {
        return this.http.post<{ post: Post }>(`${this.apiEndpoint}`, post);
    }

    editPost(originalTitle: string, updatedPost: any): Observable<{ success: boolean }> {
        return this.http.put<{ success: boolean }>(`${this.apiEndpoint}/${originalTitle}/edit`, updatedPost);
    }

    deletePost(title: string): Observable<{ success: boolean }> {
        return this.http.delete<{ success: boolean }>(`${this.apiEndpoint}/${title}`);
    }
}
