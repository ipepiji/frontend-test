import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';

import { PostService, CommentService } from '@core/services';
import { Post, Comment, Filter } from '@core/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit, OnDestroy {
  subs: any;
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
  originalComments: Array<Comment> = [];
  comments: Array<Comment> = [];

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchData(postId);
  }

  ngOnDestroy() {
    if (this.subs) this.subs.unsubscribe();
  }

  fetchData(postId: number): void {
    const sources: Array<Observable<any>> = [
      this.postService.getPost(postId),
      this.commentService.getComments(postId),
    ];
    this.subs = forkJoin(sources).subscribe({
      next: ([postRes, commentRes]: any) => {
        this.post = postRes;
        this.originalComments = commentRes;
        this.comments = this.originalComments;
      },
      error: (err: any) => {
        alert(err.error);
      },
    });
  }

  filterComments(filterObj: Filter): void {
    this.comments = filterObj
      ? this.originalComments.reduce((prev: any, curr: any) => {
          let found: boolean = curr[filterObj.type]
            .toLowerCase()
            .includes(filterObj.input ? filterObj.input.toLowerCase() : '');
          return found ? [...prev, curr] : prev;
        }, [])
      : this.originalComments;
  }
}
