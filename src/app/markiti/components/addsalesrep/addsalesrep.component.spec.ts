import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalesrepComponent } from './addsalesrep.component';

describe('AddsalesrepComponent', () => {
  let component: AddsalesrepComponent;
  let fixture: ComponentFixture<AddsalesrepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsalesrepComponent]
    });
    fixture = TestBed.createComponent(AddsalesrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
