import { Component, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';



import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  providers:[DashboardService]
})
export class BarChartComponent {



  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private dashboardSrv: DashboardService) {
    this.chartOptions = {
      series: [
        {
          name: "Previsto",
          data: dashboardSrv.getBarDataPrev()
        },
        {
          name: "Realizado",
          data: dashboardSrv.getBarDataReal()
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: ""
      },
      xaxis: {
        categories: dashboardSrv.getMixLabels()
      }
    };
  }

}
