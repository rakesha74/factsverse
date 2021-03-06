import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;
  constructor(private http: HttpClient) {}

  getData() {
    console.log("Rakesh::"+`${API_URL}apiKey=${API_KEY}`);
    return this.http.get(`${API_URL}apiKey=${API_KEY}`)
  }
}
