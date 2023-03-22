import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { AdministracaoAvaliarComponent } from './administracao/avaliar/avaliar.component';
import { MixChartComponent } from './dashboard/mix-chart/mix-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { PieChartMesComponent } from './dashboard/pie-chart-mes/pie-chart-mes.component';
import { PieChartAnoComponent } from './dashboard/pie-chart-ano/pie-chart-ano.component';
import { DashTabelaSolicitacoesComponent } from './dashboard/dash-tabela-solicitacoes/dash-tabela-solicitacoes.component';




const COMPONENTS: any[] = [
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
  AdministracaoAvaliarComponent

];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule,  NgApexchartsModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, MixChartComponent, BarChartComponent, PieChartMesComponent, PieChartAnoComponent, DashTabelaSolicitacoesComponent],
})
export class RoutesModule {}
