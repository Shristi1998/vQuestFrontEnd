import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaInterestComponent } from './qa-interest.component';

describe('QaInterestComponent', () => {
  let component: QaInterestComponent;
  let fixture: ComponentFixture<QaInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
