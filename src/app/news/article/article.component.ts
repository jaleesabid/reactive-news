import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  newsDetail: any;

  constructor(private route: Router,
              private dataService: DataService) { }

  ngOnInit() {

    /* 1st - We can use this approach if we are just navigating from one url to another and there is a direct link of these navigations. Not the second or fourth step navigation. */
    // this.newsDetail = history.state.data;

    /* 2nd - This approach can be used when we need to access data from where ever we want through out the application. */
    // this.dataService.currentNews.subscribe(news => this.newsDetail = news);

    /* 3rd - This approach can be used if we have any reload concerns (rarely) */
    this.newsDetail = JSON.parse(sessionStorage.getItem('currentNews'));
  }

}
