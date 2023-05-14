import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFilterComponent } from './comment/comment-filter/comment-filter.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { HomepageRoutingModule } from './homepage-routing.module';

//  Declarations
const COMPONENTS = [
  PostComponent,
  PostListComponent,
  CommentComponent,
  CommentFilterComponent,
  CommentListComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [SharedModule, HomepageRoutingModule],
})
export class HomepageModule {}
