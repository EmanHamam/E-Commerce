import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../Models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public httpClient:HttpClient) { }
      getAllPosts():Observable<Posts[]>{
          return this.httpClient.get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
      }
  }

