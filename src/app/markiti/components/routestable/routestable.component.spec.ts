import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutestableComponent } from './routestable.component';

describe('RoutestableComponent', () => {
  let component: RoutestableComponent;
  let fixture: ComponentFixture<RoutestableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutestableComponent]
    });
    fixture = TestBed.createComponent(RoutestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
