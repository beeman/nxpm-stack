import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'
import {
  emailValidator,
  emailValidatorMessage,
  maxlengthValidationMessage,
  maxValidationMessage,
  minlengthValidationMessage,
  minValidationMessage,
} from './admin-ui-form.validators'
import { AdminUiFormFieldRepeatComponent } from './admin-ui-form-field-repeat.component'
import { CommonModule } from '@angular/common'
import { AdminUiFormComponent } from './admin-ui-form.component'

@NgModule({
  declarations: [AdminUiFormComponent, AdminUiFormFieldRepeatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: AdminUiFormFieldRepeatComponent },
        {
          name: 'color',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'color',
            },
          },
        },
      ],
      wrappers: [],
      validationMessages: [
        { name: 'required', message: 'This field is required!' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'email', message: emailValidatorMessage },
      ],
      validators: [{ name: 'email', validation: emailValidator }],
    }),
    FormlyBootstrapModule,
  ],
  exports: [ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, AdminUiFormComponent],
})
export class AdminUiFormModule {}
