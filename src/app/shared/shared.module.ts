import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ListContainerComponent } from '@shared/components';

//  Declarations
const DECLARATIONS = [ListContainerComponent];

//  Exports
const EXPORTS = [
  ...DECLARATIONS,
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, RouterModule],
  exports: EXPORTS,
})
export class SharedModule {}
