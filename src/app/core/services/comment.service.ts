import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class CommentService {
  private baseUrl: string = `${environment.url}/comments`;

  constructor(private http: HttpClient) {}

  getComments(postId: number): Observable<Object> {
    let url = `${this.baseUrl}?postId=${postId}`;
    return this.http.get(url);
  }
}
