import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnLayoutComponent } from './one-column-layout.component';

describe('OneColumnLayoutComponent', () => {
  let component: OneColumnLayoutComponent;
  let fixture: ComponentFixture<OneColumnLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneColumnLayoutComponent]
    });
    fixture = TestBed.createComponent(OneColumnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
