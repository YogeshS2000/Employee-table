import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/Servers/employees.service';
//import { Chart, ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-employee-time-report',
  templateUrl: './employee-time-report.component.html',
  styleUrls: ['./employee-time-report.component.css'],
})
export class EmployeeTimeReportComponent implements OnInit {
  employees: Employee[] = [];
  //chartData: ChartDataSets[];
  // chartOptions: ChartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   legend: {
  //     position: 'right',
  //   },
  // };

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    //     this.chartData = this.employees.map((employee) => {
    //       return {
    //         label: employee.name,
    //         data: employee.totalTime,
    //         backgroundColor: this.getColor(employee.totalTime),
    //       };
    //     });
    //   });
    // }

    // getColor(totalTime: number): string[] {
    //   return totalTime < 100
    //     ? ['rgba(255, 99, 132, 0.7)']
    //     : ['rgba(54, 162, 235, 0.7)'];
    // }
    this.employeesService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data.sort(
          (a, b) =>
            this.calculateTimeDifference(a) - this.calculateTimeDifference(b)
        );
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  calculateTimeDifference(employee: Employee): number {
    const startTime = new Date(employee.StarTimeUtc);
    const endTime = new Date(employee.EndTimeUtc);
    const totalTime = endTime.getTime() - startTime.getTime();

    return Math.floor(totalTime / (1000 * 60 * 60));
  }

  formatTime(totalTime: number): string {
    const hours = Math.floor(totalTime);
    const minutes = Math.floor((totalTime - hours) * 60);
    return `${hours}hrs ${minutes}min`;
  }
}
