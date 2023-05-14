import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OneColumnLayoutComponent } from '@core/layouts';
import { FourOhFourComponent } from '@core/components';

const routes: Routes = [
  {
    path: '',
    component: OneColumnLayoutComponent,
    loadChildren: () =>
      import('@features/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  {
    path: '404',
    component: FourOhFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
