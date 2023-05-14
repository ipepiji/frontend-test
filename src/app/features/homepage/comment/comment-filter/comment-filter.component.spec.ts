import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFilterComponent } from './comment-filter.component';

describe('CommentFilterComponent', () => {
  let component: CommentFilterComponent;
  let fixture: ComponentFixture<CommentFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentFilterComponent]
    });
    fixture = TestBed.createComponent(CommentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
