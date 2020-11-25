import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core'

@Component({
  selector: 'admin-ui-form',
  template: `
    <form [formGroup]="form" novalidate (ngSubmit)="submit()">
      <div>
        <formly-form [fields]="fields" [form]="form" [model]="model" [options]="options"></formly-form>
        <button type="submit" style="display: none;" [disabled]="form.touched && !form.valid">submit</button>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiFormComponent implements OnInit {
  @Input() fields: FormlyFieldConfig[] = []
  @Input() form = new FormGroup({})
  @Input() model: Record<string, unknown> = {}
  @Input() options: FormlyFormOptions
  @Output() action = new EventEmitter()

  constructor(private builder: FormlyFormBuilder) {}

  ngOnInit(): void {
    this.builder.buildForm(this.form, this.fields, this.model, this.options)
  }

  submit() {
    this.action.emit({
      type: 'SUBMIT',
      payload: this.model,
    })
  }
}
