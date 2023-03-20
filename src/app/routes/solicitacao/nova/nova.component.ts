
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
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



  columns: MtxGridColumn[] = [
    { header:  'Macrocélula' , field: 'macrocelula' },
    { header:  'Célula' ,      field: 'celula'},
    { header:  'Atividade' , field: 'atividade'},
    { header:  'Complexidade' , field: 'complexidade'},
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
    'complexidade':'Baixa',
    'fatorp':1,
    'esforco':8,
    'simultaneidade':2,
    'diasu':3,
    'diasnu':1,
    'usts':125

  }];




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

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text',
        placeholder: 'Type here to see the other field become enabled...',
        required: true,
      },
    },
    {
      key: 'text2',
      type: 'input',
      templateOptions: {
        label: 'Hey!',
        placeholder: 'This one is disabled if there is no text in the other input',
      },
      expressionProperties: {
        'templateOptions.disabled': '!model.text',
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];

  // Advanced Layout
  form2 = new FormGroup({});
  model2 = {};
  fields2: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-6',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            label: 'First Name',
            required: true,
          },
        },
        {
          className: 'col-sm-6',
          type: 'input',
          key: 'lastName',
          templateOptions: {
            label: 'Last Name',
            required: true,
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.firstName',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-6',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
          },
        },
        {
          className: 'col-sm-3',
          type: 'combobox',
          key: 'cityId',
          templateOptions: {
            label: 'City',
            options:this.cidades,
            labelProp: 'name',
            valueProp: 'id',
            required: true,
            description: 'This is a custom field type.',
          },
        },
        {
          className: 'col-sm-3',
          type: 'input',
          key: 'zip',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    },
    {
      type: 'textarea',
      key: 'otherInput',
      templateOptions: {
        label: 'Other Input',
      },
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      templateOptions: {
        label: 'Other Checkbox',
      },
      wrappers: ['div'],
    },
  ];



// Advanced Layout
formSol = new FormGroup({});
modelSol = {};
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
                    options:this.mesano,
                    labelProp: 'ano',
                    valueProp: 'ano',
                    required: true,

                  },
                },{
                  className: 'col-sm-4',
                  type: 'combobox',
                  key: 'celula',
                  templateOptions: {
                    label: 'Célula',
                    options:this.mesano,
                    labelProp: 'ano',
                    valueProp: 'ano',
                    required: true,

                  },
                }
              ]
},{
  fieldGroupClassName: 'row',
  fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'combobox',
                  key: 'atividade',
                  templateOptions: {
                    label: 'Atividade',
                    options:this.mesano,
                    labelProp: 'ano',
                    valueProp: 'ano',
                    required: true,

                  },
                },{
                  className: 'col-sm-8',
                  type: 'textarea',
                  key: 'descricao',
                  templateOptions: {
                    label: 'Descrição',
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
                  key: 'complexidade',
                  templateOptions: {
                    label: 'Complexidade',
                    required: true,

                  },
                },{
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'fatorp',
                  templateOptions: {
                    label: 'Fator de Ponderação',
                    required: true,
                  },
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
}


]




  constructor(private toast: ToastrService, private dialog: MtxDialog) {}
  ngOnInit(): void {
  console.log(this.columns)
  console.log(this.lista)
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model.email)
      this.showToast(this.model);
    }
  }

  submit2() {
    if (this.form2.valid) {
      this.showToast(this.model2);
    }
  }

  submit3() {
    if (this.formSol.valid) {
      this.showToast(this.modelSol);
      console.log(this.modelSol)
      console.log(this.model)
      console.log(this.model2)
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
