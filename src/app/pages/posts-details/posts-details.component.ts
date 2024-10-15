import { Component } from '@angular/core';
import { iJSONresponse, iPosts } from '../../modules/i-posts';
import { ActivatedRoute } from '@angular/router';
import { IpostServService } from '../../services/ipost-serv.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrl: './posts-details.component.scss',
  // this.variable = data.posts.find((p) => p.id === parseInt(postId));
})
export class PostsDetailsComponent {
  posts: iPosts[] = [];
  post!: iPosts;
  variable: iPosts | undefined;
  constructor(
    private route: ActivatedRoute,
    private postServ: IpostServService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const postId = params['id'];
      this.posts = this.postServ.posts;
      this.variable = this.posts.find((p) => p.id === parseInt(postId));
    });
  }
}
