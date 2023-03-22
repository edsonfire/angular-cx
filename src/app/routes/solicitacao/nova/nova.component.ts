
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Complexidade } from 'app/models/complexidade.model';
import { Ust } from 'app/models/ust.model';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solicitacao-nova',
  templateUrl: './nova.component.html',
  styleUrls: ['./nova.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolicitacaoNovaComponent implements OnInit  {


   totalUst:number=0;
  columns: MtxGridColumn[] = [
    { header:  'Macrocélula' , field: 'macrocelula' },
    { header:  'Célula' ,      field: 'celula'},
    { header:  'Atividade' , field: 'atividade'},
    { header:  'Complexidade' , field: 'complexidade.descricao'},
    { header:  'Fator Pond.' , field: 'fatorp'},
    { header:  'Esforço (hrs)' ,field: 'esforco'},
    { header:  'Simultaneidade' , field: 'simultaneidade'},
    { header:  'Dias Úteis' , field: 'diasu'},
    { header:  'Dias Não Úteis' , field: 'diasnu'},
    { header:  'UST´s' , field: 'usts'},
    { header:  'Retirar', field:'retirar' },
    { header: 'OPE',
      field: 'operation',
      minWidth: 160,
      width: '160px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: 'Editar',
          click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: 'Deletetar',
          tooltip: 'Deletar essa linha',
          pop: {
            title: 'Confirma?',
            closeText: 'Cancel',
            okText: 'OK',
          },
          click: record => this.delete(record),
        },
      ],
    }
  ];

  lista: Ust[] = [{
    'macrocelula':'Macr 1',
    'celula':'Célula 1',
    'atividade':'atv 1',
    'complexidade':{
      'descricao':'Alta',
      'fatorp':3
    },
    'fatorp':1,
    'esforco':8,
    'simultaneidade':2,
    'diasu':3,
    'diasnu':1,
    'usts':125

  }];


  complexidadeList: Complexidade[] =
    [
      {
        descricao: 'Baixa',
        fatorp: 1

      },
      {
        descricao: 'Média',
        fatorp: 1.84

      },
      {
    descricao: 'Alta',
    fatorp: 3.37

  },{
    descricao: 'Elevada',
    fatorp: 4.11

  }];

  macrocelulas=[
    {"descricao":"Rede"},
    {"descricao":"Central de Atendimento e Monitoração"},
    {"descricao":"Automação"}
  ]


  celulas=[
    {"descricao":"Rede datacenter"},
    {"descricao":"Adm. de serv. de rede"},
    {"descricao":"Ger. de infra e mon. de datacenter"},
    {"descricao":"Aut. de infra e serv. de datacenter"}
  ]

  atividades=[
    {"descricao":"Acionar fornecedor"},
    {"descricao":"Acompanhar fornec"},
    {"descricao":"Ger. de infra e mon. de datacenter"},
    {"descricao":"Aut. de infra e serv. de datacenter"},
    {"descricao":"Verificar integridade"},
    {"descricao":"Suporte/manutenção"},
    {"descricao":"Documentação e Melhorias"}

  ]


  cidades = [{
    "name":"Brasília-DF",
  },
  {
    "name":"Goiania-GO",
  },
  {
    "name":"São Paulo-SP",
  },
  {
    "name":"Recife-PE",
  }]

  mesano = [{
    "ano":"Jan/2023"
  },
  {
    "ano":"Fev/2023"
  },
  {
    "ano":"Mar/2023"
  },
  {
    "ano":"Abr/2023"
  }]


// Advanced Layout
formSol = new FormGroup({});
modelSol = {
};
fieldsSol: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
                  {
                    className: 'col-sm-3',
                    type: 'combobox',
                    key: 'mesano',
                    templateOptions: {
                      label: 'Mês',
                      placeholder:'escolha  o Mês',
                      options:this.mesano,
                      labelProp: 'ano',
                      valueProp: 'ano',
                      required: true,

                    },
                  }
                ]
}
,{
  fieldGroupClassName: 'row',
  fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'macrocelula',
                  templateOptions: {
                    label: 'Macro Serviço',
                    required: true,
                  },
                },{
                  className: 'col-sm-4',
                  type: 'combobox',
                  key: 'macroc',
                  templateOptions: {
                    label: 'Macro Célula',
                    options:this.macrocelulas,
                    labelProp: 'descricao',
                    valueProp: 'descricao',
                    required: true,

                  },
                },{
                  className: 'col-sm-4',
                  type: 'combobox',
                  key: 'celula',
                  templateOptions: {
                    label: 'Célula',
                    options:this.celulas,
                    labelProp: 'descricao',
                    valueProp: 'descricao',
                    required: true,

                  },
                }
              ]
},{
  fieldGroupClassName: 'row',
  fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'select',
                  key: 'atividade',
                  templateOptions: {
                    label: 'Atividade',
                    options:this.atividades,
                    labelProp: 'descricao',
                    valueProp: 'descricao',
                    required: true,

                  },
                },{
                  className: 'col-sm-8',
                  type: 'textarea',
                  key: 'descricao',
                  templateOptions: {
                    label: 'Descrição',
                    required: true,
                    rows:5
                  },

                }
              ]
},{
  fieldGroupClassName: 'row',
  fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'select',
                  key: 'complexidade',
                  templateOptions: {
                    label: 'Complexidade',
                    options:this.complexidadeList,
                    labelProp: 'descricao',
                    valueProp: 'descricao',
                    required: true,
                    change: (field: FormlyFieldConfig)=>{
                      console.log('alterando o valor da complexidade'+field.model.fatorp)
                      field.model.fatorp=7;
                      console.log('alterado o valor da complexidade'+field.model.fatorp)
                  },

                  },
                  expressionProperties: {
                    'templateOptions.onChange': (field: FormlyFieldConfig) => {
                      console.log('Selected value:', field.model.fatorp);
                      // Add your custom behavior here
                    },
                  }
                },{
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'fatorp',
                  templateOptions: {
                    label: 'Fator de Ponderação',
                    required: true,
                    change: (field: FormlyFieldConfig, $event)=>{
                      console.log('alterando o fator p '+field.model.fatorp)
                  },

                  },
                  expressions:{

                      'templateOptions.disabled': (field: FormlyFieldConfig) => {
                        return !field.model.complexidade;
                      },

                  }


                },{
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'esforco',
                  templateOptions: {
                    label: 'Esforço',
                    required: true,

                  },
                }
              ]
},{
  fieldGroupClassName: 'row',
  fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'simultaneidade',
                  templateOptions: {
                    label: 'Simultaneidade',
                    required: true,

                  },
                },{
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'diasu',
                  templateOptions: {
                    label: 'Dias Úteis',
                    required: true,
                  },
                },{
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'diasnu',
                  templateOptions: {
                    label: 'Dias Não Úteis',
                    required: true,
                  },
                }
              ]
},


]

  constructor(private toast: ToastrService, private dialog: MtxDialog) {}
  ngOnInit(): void {
  console.log(this.columns)
  console.log(this.lista)
  }


  submit3() {
    if (this.formSol.valid) {
      this.showToast(this.modelSol);
      console.log(this.modelSol)
      this.lista.push(this.modelSol)
      console.log(this.lista)
      this.lista = this.lista.splice(-1).concat(this.lista);


    }
  }



  showToast(obj: any) {
    this.toast.success(JSON.stringify(obj));
  }

  updateList() {
    console.log('ATUALIZANDO A LISTA')
    this.lista = this.lista.splice(-1).concat(this.lista);
  }



  delete(value: any) {


    let indexToremove= this.lista.indexOf(value);
    console.log('TAMANHO DA LISTA ANTES: '+this.lista.length)
    console.log('Antes de deletar: '+JSON.stringify(this.lista));
    console.log('deletando da lista: '+JSON.stringify(this.lista.at(indexToremove)));
    console.log('deletando object: '+JSON.stringify(value));

    this.lista.splice(indexToremove,1);

       console.log('TAMANHO DA LISTA DEPOIS: '+this.lista.length)

    console.log('depois de deletar: '+JSON.stringify(this.lista));

    this.lista=[]
    this.lista = this.lista.splice(-1).concat(this.lista);
    this.dialog.alert(`deletandooo ${value.macrocelula}!`);
  }


  edit(value: any) {
    console.log(value)
  };



}
