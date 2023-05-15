import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTimeReportComponent } from './employee-time-report/employee-time-report.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeTimeReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
