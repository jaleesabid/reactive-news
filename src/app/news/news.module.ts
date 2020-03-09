import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {FormsModule} from '@angular/forms';

export const DashboardRoutes: Routes = [{
  path: 'news',
  children: [{
    path: '',
    component: NewsComponent
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    SlickCarouselModule,
    FormsModule
  ],
  declarations: [NewsComponent]
})

export class NewsModule {}
