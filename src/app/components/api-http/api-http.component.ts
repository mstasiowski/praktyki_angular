import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-api-http',
  templateUrl: './api-http.component.html',
  styleUrls: ['./api-http.component.css']
})
export class ApiHttpComponent implements OnInit  {

  
ngOnInit(): void {
//   this.form = this.formBuilder.group({
// });
this.initializeForm();


}

get f():any {return this.postForm.controls}


userId2: number;
id2: number;
title2: string;
body2:string;

public newpost: Array<any> =[];
public newpost2: Observable<Array<Post>>

postForm: FormGroup;

onepost:Post;


allPosts$: Observable<Array<Post>>;

  constructor(private httpService: HttpService,private formbuilder: FormBuilder ) { }

  getPosts(){
    this.allPosts$ = this.httpService.posts$;
  }

  getPost(){
    this.onSubmit();
    this.httpService.getPost(this.id2).subscribe(post =>{
      this.onepost = post;
      // console.log(this.onepost)

      this.userId2 = this.onepost.userId;
      this.id2 = this.onepost.id;
      this.title2 = this.onepost.title;
      this.body2 = this.onepost.body;
    })
  }

  getPostByUser(){
    this.onSubmit();
    this.httpService.getPost(this.userId2).subscribe(posts=>{
      console.log(posts);
      console.log(this.userId2)
    })
  }

  addPost(){
    this.onSubmit();
    const p: Post =({
      userId: this.userId2,
      id: this.id2,
      title: this.title2,
      body: this.body2
    });
    this.httpService.addPost(p).subscribe(post=>{console.log(post)});
  }

  updatePost(){
    this.onSubmit();
    const p: Post =({
      userId:  this.userId2,
      id: this.id2,
      title: this.title2,
      body: this.body2
    });
    this.httpService.updatePost(p).subscribe(post =>
       {
        console.log(post);
       });
  }

  deletePost(){
    this.onSubmit();
    this.httpService.deletePost(this.id2).subscribe(post =>{
      this.getPost();
      console.log(post);
    });
  }

  changePost(){
    this.onSubmit();
    const p: Post =({
      id: this.id2,
      body: this.body2,
    });
    this.httpService.changePost(p).subscribe(post =>{
      console.log(post);
    })
  }

 
  onSubmit()
    {
      this.userId2 = this.postForm.value.post_userId;
      this.id2 = this.postForm.value.post_id;
      this.title2 = this.postForm.value.post_title;
      this.body2 = this.postForm.value.post_body;
      
      


    
    }

  initializeForm(){
    this.postForm = new FormGroup({
      'post_userId': new FormControl("",Validators.required),
      'post_id': new FormControl("", [Validators.required, Validators.minLength(10)]),
      'post_title': new FormControl(""),
      'post_body': new FormControl(""),
    });
 
}



}

export interface Post {
  userId?: number,
  id?: number,
  title?: string,
  body?: string
}

