import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkitilandingComponent } from './markitilanding.component';

describe('MarkitilandingComponent', () => {
  let component: MarkitilandingComponent;
  let fixture: ComponentFixture<MarkitilandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkitilandingComponent]
    });
    fixture = TestBed.createComponent(MarkitilandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
