import { Component, Input } from '@angular/core';
import { iPosts } from '../../modules/i-posts';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post!: iPosts;
}
