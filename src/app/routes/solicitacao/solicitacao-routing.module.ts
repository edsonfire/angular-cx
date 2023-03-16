import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitacaoNovaComponent } from './nova/nova.component';

const routes: Routes = [{ path: 'nova', component: SolicitacaoNovaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacaoRoutingModule { }
