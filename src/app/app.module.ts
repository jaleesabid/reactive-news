import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { HeaderComponent } from './_layouts/components/header/header.component';
import { FooterComponent } from './_layouts/components/footer/footer.component';
import { UserLayoutComponent } from './_layouts/user/user-layout.component';
import { Globals } from './globals';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NewsComponent} from './news/news.component';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, DataService, Globals, NewsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
