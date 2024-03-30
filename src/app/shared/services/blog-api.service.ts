import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  private apiUrl = 'https://dev.to/api/articles'; 

  constructor(private http: HttpClient) {}

  getPosts(page: number, limit: number = 9): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&per_page=${limit}`);
  }
}

