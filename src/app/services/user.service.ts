import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private globals: Globals) {}

  topHeadlines(q) {
    // const headers = new HttpHeaders();
    // headers.append("Content-Type", "application/json");
    return this.http.get<any>('http://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.globals.apiKey + '&q=' + q);
  }
}
