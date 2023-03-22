import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { DashboardService } from '../dashboard.service';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart-ano',
  templateUrl: './pie-chart-ano.component.html',
  styleUrls: ['./pie-chart-ano.component.css'],
  providers:[DashboardService]
})
export class PieChartAnoComponent {


  @ViewChild("charta") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private dashboardSrv: DashboardService) {
    console.log("inicializando....."+dashboardSrv.getTotalMes)
    this.chartOptions = {
      series: dashboardSrv.getTotalAno(),
      chart: {
        width: 380,
        type: "pie"
      },
      labels: dashboardSrv.getUnidadesCaixa,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }


}
