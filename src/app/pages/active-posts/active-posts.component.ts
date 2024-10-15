import { Component } from '@angular/core';
import { iPosts } from '../../modules/i-posts';
import { IpostServService } from '../../services/ipost-serv.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  constructor(private postServ: IpostServService) {}
  posts: iPosts[] = this.postServ.posts;
  activePost: iPosts[] = [];

  ngOnInit() {
    this.activePost = this.postServ.getActivePost(this.posts);
  }
}
