import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class PostService {
  private baseUrl: string = `${environment.url}/posts`;

  constructor(private http: HttpClient) {}

  getPost(id: number): Observable<Object> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  getPosts(): Observable<Object> {
    let url = this.baseUrl;
    return this.http.get(url);
  }
}
