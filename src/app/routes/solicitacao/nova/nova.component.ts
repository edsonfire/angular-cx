
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solicitacao-nova',
  templateUrl: './nova.component.html',
  styleUrls: ['./nova.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolicitacaoNovaComponent  {
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

  constructor(private toast: ToastrService) {}

  submit() {
    if (this.form.valid) {
      this.showToast(this.model);
    }
  }

  submit2() {
    if (this.form2.valid) {
      this.showToast(this.model2);
    }
  }

  showToast(obj: any) {
    this.toast.success(JSON.stringify(obj));
  }

}
