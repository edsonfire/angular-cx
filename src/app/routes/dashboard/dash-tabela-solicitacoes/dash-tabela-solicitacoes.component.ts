import { Component } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { RelUnidade } from 'app/models/rel-unidade.model';
import { Ust } from 'app/models/ust.model';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-dash-tabela-solicitacoes',
  templateUrl: './dash-tabela-solicitacoes.component.html',
  styleUrls: ['./dash-tabela-solicitacoes.component.css'],
  providers:[DashboardService]
})
export class DashTabelaSolicitacoesComponent {
  columns: MtxGridColumn[] =[];
  lista:RelUnidade[]=[];

  constructor(private dashService: DashboardService){

        this.columns=dashService.getColumns()
        this.lista = dashService.getLista();

  }


}
