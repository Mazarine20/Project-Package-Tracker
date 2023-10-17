import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrackerComponent } from './home-tracker.component';

describe('HomeTrackerComponent', () => {
  let component: HomeTrackerComponent;
  let fixture: ComponentFixture<HomeTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTrackerComponent]
    });
    fixture = TestBed.createComponent(HomeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
