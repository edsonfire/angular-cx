import { Component, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-mix-chart',
  templateUrl: './mix-chart.component.html',
  styleUrls: ['./mix-chart.component.css'],
  providers:[DashboardService]
})
export class MixChartComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private dashboardSrv: DashboardService) {

    console.log("labels:  "+dashboardSrv.getMixLabels())
    this.chartOptions = {
      series: [
        {
          name: "",
          type: "column",
          data: dashboardSrv.getMixBarData()
        },
        {
          name: "",
          type: "line",
          data: dashboardSrv.getMixLineData()
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: ""
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: dashboardSrv.getMixLabels(),
      xaxis: {

      },
      yaxis: [
        {
          title: {
            text: ""
          }
        },
        {
          opposite: true,
          title: {
            text: ""
          }
        }
      ]
    };
  }

}
