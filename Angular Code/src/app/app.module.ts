import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTimeReportComponent } from './employee-time-report/employee-time-report.component';
import { HttpClientModule } from '@angular/common/http';
// import { ChartsModule } from 'charts.js';

@NgModule({
  declarations: [AppComponent, EmployeeTimeReportComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
