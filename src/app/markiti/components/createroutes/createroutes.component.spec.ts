import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateroutesComponent } from './createroutes.component';

describe('CreateroutesComponent', () => {
  let component: CreateroutesComponent;
  let fixture: ComponentFixture<CreateroutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateroutesComponent]
    });
    fixture = TestBed.createComponent(CreateroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
