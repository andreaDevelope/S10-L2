import { Component, Input } from '@angular/core';
import { iPosts } from '../../modules/i-posts';
import { IpostServService } from '../../services/ipost-serv.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post!: iPosts;
  isActive: boolean = false;
  constructor(private postserv: IpostServService) {}
  ngOnInit() {
    this.isActive = this.postserv.isActive;
  }
}
