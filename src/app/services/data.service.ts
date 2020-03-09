import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private newsSource = new BehaviorSubject('Default news');
  currentNews = this.newsSource.asObservable();

  constructor() { }

  changeNews(message: string) {
    this.newsSource.next(message);
  }

}
