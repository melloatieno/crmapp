import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontactsComponent } from './viewcontacts.component';

describe('ViewcontactsComponent', () => {
  let component: ViewcontactsComponent;
  let fixture: ComponentFixture<ViewcontactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcontactsComponent]
    });
    fixture = TestBed.createComponent(ViewcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
