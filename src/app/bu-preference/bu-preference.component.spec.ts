import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuPreferenceComponent } from './bu-preference.component';

describe('BuPreferenceComponent', () => {
  let component: BuPreferenceComponent;
  let fixture: ComponentFixture<BuPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
