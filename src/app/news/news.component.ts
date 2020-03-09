import {Component, OnInit, ViewChild} from '@angular/core';
import {Globals} from '../globals';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  showSearch = false;
  search = '';
  sliderNews = [];
  newsResult;
  newsInProgress = true;
  today = new Date();

  @ViewChild('slickModal', {static: true}) slickModal: SlickCarouselComponent;

  constructor(private globals: Globals,
              private userService: UserService,
              private route: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.getTopHeadlines();
  }

  getTopHeadlines(q: string = ''): void {
    this.newsInProgress = true;
    this.userService.topHeadlines(q).subscribe(res => {
      this.newsInProgress = false;
      if (res.status == 'ok') {
        this.newsResult = res;
        this.sliderNews.length = 0;
        for (let i = 0; i < 5; i++) {
          if (res.articles[i]) {
            this.sliderNews.push(res.articles[i]);
          }
        }
        // this.slickModal.unslick();
      }
    }, error => {
      console.error(error.name + 'error occured');
    });
  }

  newsDetail(news): void {
    /* 1st - refer article.component.ts */
    // this.route.navigate(['/news/article'], {state: {data: news}});

    /* 2st - refer article.component.ts */
    // this.dataService.changeNews(news);

    /* 3rd - refer article.component.ts */
    sessionStorage.setItem('currentNews', JSON.stringify(news));

    this.route.navigate(['/news/article']);
  }

  openSearch(): void {
    this.showSearch = this.showSearch == false;
  }

  searchNews(): void {
    if (this.search.length > 2 || this.search.length == 0) {
      this.getTopHeadlines(this.search);
    }
  }

}
