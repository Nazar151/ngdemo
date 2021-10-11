import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private Url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient : HttpClient) { }
 getCommentsFromUrl(): Observable<Comment[]>{
   return this.httpClient.get<Comment[]>(this.Url);
  }

}
