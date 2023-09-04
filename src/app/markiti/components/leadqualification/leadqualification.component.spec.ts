import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadqualificationComponent } from './leadqualification.component';

describe('LeadqualificationComponent', () => {
  let component: LeadqualificationComponent;
  let fixture: ComponentFixture<LeadqualificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadqualificationComponent]
    });
    fixture = TestBed.createComponent(LeadqualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
