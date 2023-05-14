import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//  Exports
const EXPORTS = [
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  exports: EXPORTS,
})
export class SharedModule {}
