import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanIDDashboardComponent } from './lan-iddashboard.component';

describe('LanIDDashboardComponent', () => {
  let component: LanIDDashboardComponent;
  let fixture: ComponentFixture<LanIDDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanIDDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanIDDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
