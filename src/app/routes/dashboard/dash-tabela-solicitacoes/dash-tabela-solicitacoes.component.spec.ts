import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTabelaSolicitacoesComponent } from './dash-tabela-solicitacoes.component';

describe('DashTabelaSolicitacoesComponent', () => {
  let component: DashTabelaSolicitacoesComponent;
  let fixture: ComponentFixture<DashTabelaSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashTabelaSolicitacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTabelaSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
