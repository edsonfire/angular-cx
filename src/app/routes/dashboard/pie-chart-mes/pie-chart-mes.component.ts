import { Component, Input, ViewChild } from '@angular/core';
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
  selector: 'app-pie-chart-mes',
  templateUrl: './pie-chart-mes.component.html',
  styleUrls: ['./pie-chart-mes.component.css'],
  providers:[DashboardService]
})
export class PieChartMesComponent {



  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input()
  fruits!: string;


  constructor(private dashboardSrv: DashboardService) {
'console.log("a fruta escolhida foi: "+this.fruits)'

    this.chartOptions = {
      series: dashboardSrv.getTotalMes(),
      chart: {
        width: 380,
        type: "pie"
      },
      labels: dashboardSrv.getUnidadesCaixa(),
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
