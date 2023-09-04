import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutescontentComponent } from './routescontent.component';

describe('RoutescontentComponent', () => {
  let component: RoutescontentComponent;
  let fixture: ComponentFixture<RoutescontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutescontentComponent]
    });
    fixture = TestBed.createComponent(RoutescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
