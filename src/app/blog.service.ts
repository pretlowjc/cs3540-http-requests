import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Post from '../app/models/post.model';

export class BlogService {
    constructor(private http: HttpClient) { }

    // get method...
    getPosts(): Observable<{ post: Post }> {
        return this.http.get<{ post: Post }>('http://localhost:3000/api/blog/');
    }

    // put method...technically more like an edit...
    putPost(title: string, post: Post): Observable<{ post: Post}> {
        // path not correct!
        return this.http.put<{ post: Post }>('http://localhost:3000/api/blog/', post);
    }

    // post method
    postPost(post: Post): Observable<{ post: Post}> {
        // path not correct!
        return this.http.post<{ post: Post }>('http://localhost:3000/api/blog/', post);
    }

    // delete method...
    deletePost(id: string): Observable<{ post: Post }> {
        // path not correct!
        return this.http.delete<{ post: Post }>('http://localhost:3000/api/blog/');
    }
}
