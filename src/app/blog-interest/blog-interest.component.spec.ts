import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInterestComponent } from './blog-interest.component';

describe('BlogInterestComponent', () => {
  let component: BlogInterestComponent;
  let fixture: ComponentFixture<BlogInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
