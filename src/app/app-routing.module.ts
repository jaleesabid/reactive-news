import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLayoutComponent} from './_layouts/user/user-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', loadChildren: './news/news.module#NewsModule'},
      { path: '', loadChildren: './news/article/article.module#ArticleModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
