import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTimeReportComponent } from './employee-time-report.component';

describe('EmployeeTimeReportComponent', () => {
  let component: EmployeeTimeReportComponent;
  let fixture: ComponentFixture<EmployeeTimeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTimeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
