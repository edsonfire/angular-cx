import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SolicitacaoRoutingModule } from './solicitacao-routing.module';
import { SolicitacaoNovaComponent } from './nova/nova.component';

const COMPONENTS: any[] = [SolicitacaoNovaComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    SolicitacaoRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class SolicitacaoModule  { }
