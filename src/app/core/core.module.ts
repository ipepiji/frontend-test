import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { FourOhFourComponent } from './components';
import { OneColumnLayoutComponent } from './layouts';
import { PostService, CommentService } from './services';

const DECLARATIONS = [FourOhFourComponent, OneColumnLayoutComponent];

const SERVICES = [PostService, CommentService];

const EXPORTS = [FourOhFourComponent, OneColumnLayoutComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [SharedModule],
  providers: [...SERVICES],
  exports: EXPORTS,
})
export class CoreModule {}
