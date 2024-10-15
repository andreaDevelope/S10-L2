import { Component } from '@angular/core';
import { iJSONresponse, iPosts } from '../../modules/i-posts';
import { IpostServService } from '../../services/ipost-serv.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  constructor(private postSer: IpostServService) {}
  posts: iPosts[] = this.postSer.posts;
  postsinactArr: iPosts[] = [];

  ngOnInit() {
    this.postsinactArr = this.postSer.getInactivePost(this.posts);
  }
}
