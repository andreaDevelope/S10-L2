import { Component } from '@angular/core';
import { iJSONresponse, iPosts } from '../../modules/i-posts';
import { IpostServService } from '../../services/ipost-serv.service';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  postsOrd: iPosts[] = [];
  posts: iPosts[] = [];
  featuredPostArr: iPosts[] = [];

  featuredPost!: iPosts;

  constructor(private postSer: IpostServService) {}

  ngOnInit() {
    this.featuredPostArr = this.postSer.getActivePost(this.postSer.posts);
    this.featuredPost = this.featuredPostArr[0];
    this.posts = this.postSer.posts.slice(0, 4);
    this.postsOrd = this.postSer.postsOrd;
  }
}
