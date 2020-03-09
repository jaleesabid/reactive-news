import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from './article.component';

export const DashboardRoutes: Routes = [{
  path: 'news/article',
  children: [{
    path: '',
    component: ArticleComponent
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [ArticleComponent]
})

export class ArticleModule {}
