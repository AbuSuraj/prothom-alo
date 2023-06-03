import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  getNews(){
     return this.http.get(`http://localhost:5000/news`);
  }
  // getTodaysNews(){
  //    return this.http.post(`http://localhost:5000/addNews`);
  // }
}
