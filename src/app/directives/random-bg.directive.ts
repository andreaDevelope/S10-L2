import { Directive, ElementRef } from '@angular/core';
import { IpostServService } from '../services/ipost-serv.service';
import { iPosts } from '../modules/i-posts';

@Directive({
  selector: '[appRandomBg]',
})
export class RandomBgDirective {
  posts: iPosts[] = [];
  btColors: string[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'muted',
    'white',
    'black',
  ];

  numRnd: number = Math.floor(Math.random() * this.btColors.length);

  constructor(private postServ: IpostServService, private ref: ElementRef) {}

  ngOnInit() {
    this.posts = this.postServ.posts;
    this.btColors.forEach((color) => {
      this.ref.nativeElement.classList.remove(`text-${color}`);
    });
    this.ref.nativeElement.classList.add(
      `text-bg-${this.btColors[this.numRnd]}`
    );
  }
}
