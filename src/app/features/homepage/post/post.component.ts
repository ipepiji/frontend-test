import { Component, OnInit, OnDestroy } from '@angular/core';

import { PostService } from '@core/services';
import { Post } from '@core/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  subs: any;
  posts: Array<Post> = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.subs = this.postService.getPosts().subscribe({
      next: (res: any) => {
        this.posts = res;
      },
      error: (err: any) => {
        alert(err.error);
      },
    });
  }

  ngOnDestroy() {
    if (this.subs) this.subs.unsubscribe();
  }
}
