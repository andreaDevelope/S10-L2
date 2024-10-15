import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsDetailsComponent } from './pages/posts-details/posts-details.component';
import { NavBarComponent } from './main-components/nav-bar/nav-bar.component';
import { SinglePostComponent } from './children-home-component/single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { NgContentComponent } from './content-single-page/ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    HomeComponent,
    PostsDetailsComponent,
    NavBarComponent,
    SinglePostComponent,
    NgContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
