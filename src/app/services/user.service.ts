import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Metadata } from '../models/metadata';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Metadata> {
    return this.http.get<Metadata>('/user');
  }

  public post(user: User): Observable<Metadata> {
    return this.http.post<Metadata>('/user', user);
  }
}
