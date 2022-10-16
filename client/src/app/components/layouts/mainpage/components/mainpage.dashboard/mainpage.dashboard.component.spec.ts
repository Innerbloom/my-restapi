import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageDashboardComponent } from './mainpage.dashboard.component';

describe('MainpageDashboardComponent', () => {
  let component: MainpageDashboardComponent;
  let fixture: ComponentFixture<MainpageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
