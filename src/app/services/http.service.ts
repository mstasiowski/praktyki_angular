import {Injectable} from "@angular/core";
import {Post} from "../components/api-http/api-http.component";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class HttpService{


private postsObs = new BehaviorSubject<Array<Post>>([]);
posts$ = this.postsObs.asObservable();

    constructor(private http: HttpClient){
      this.getPosts();
    }

    getPosts() {
      return  this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe(
      posts =>{
        this.postsObs.next(posts)
      },
      err =>{console.log(err);}
       
      );
    }

    getPost(id: number): Observable<Post> {
      return  this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    getPostByUser(userId: number){
        const parm = new HttpParams().set('userId', userId + '')
     return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts' + {params: parm})
    }

    addPost(post: Post): Observable <Post>
    {
      return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
    }

    updatePost(post:Post): Observable<Post> {
      return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/'+ (post.id??1), post)
    }

    deletePost(id:number){
      return  this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    changePost(post: Post){
      return this.http.patch('https://jsonplaceholder.typicode.com/posts/'+ post.id, post);
    }
}