import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpclient: HttpClient) {

  }

  getUsersFromUrl(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.url)

  }

}
