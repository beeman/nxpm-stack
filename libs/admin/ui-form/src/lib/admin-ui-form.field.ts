import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core'

export class AdminUiFormField implements FormlyFieldConfig {
  public static map(f: string) {
    const map = {
      input: AdminUiFormField.input,
      email: AdminUiFormField.email,
      password: AdminUiFormField.password,
      number: AdminUiFormField.number,
      checkbox: AdminUiFormField.checkbox,
      radio: AdminUiFormField.radio,
      select: AdminUiFormField.select,
      textarea: AdminUiFormField.textarea,
      group: AdminUiFormField.group,
      template: AdminUiFormField.template,
      date: AdminUiFormField.date,
      time: AdminUiFormField.time,
    }
    return map[f] ? map[f] : AdminUiFormField.input
  }

  public static field(
    type: string,
    key: string,
    templateOptions?: FormlyTemplateOptions,
    options?: any,
  ): FormlyFieldConfig {
    return {
      type,
      key,
      templateOptions,
      ...options,
    }
  }

  public static input(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.field('input', key, templateOptions, options)
  }

  public static email(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    const defaults = {
      type: 'email',
      label: 'Email',
    }
    const defaultOptions = { validators: { validation: ['email'] } }

    return AdminUiFormField.input(key, { ...templateOptions, ...defaults }, { ...options, ...defaultOptions })
  }

  public static password(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    const defaults = {
      label: 'Password',
      type: 'password',
      minLength: 8,
      required: true,
    }

    return AdminUiFormField.input(key, { ...templateOptions, ...defaults }, options)
  }

  public static number(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.input(key, { ...templateOptions, type: 'number' }, { ...options })
  }

  public static checkbox(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.field('checkbox', key, templateOptions, options)
  }

  public static radio(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.field('radio', key, templateOptions, options)
  }

  public static select(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.field('select', key, templateOptions, options)
  }

  public static typeahead(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.field('typeahead', key, templateOptions, options)
  }

  public static textarea(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    const defaultTemplateOptions = { rows: 5 }

    return AdminUiFormField.field('textarea', key, { ...defaultTemplateOptions, ...templateOptions }, options)
  }

  public static group(fieldGroupClassName: string, fieldGroup: FormlyFieldConfig[]): FormlyFieldConfig {
    return { fieldGroupClassName, fieldGroup }
  }

  public static template(template: string): FormlyFieldConfig {
    return { type: 'formly-template', template }
  }

  public static date(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.input(key, { ...templateOptions, type: 'date' }, { ...options })
  }

  public static time(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.input(key, { ...templateOptions, type: 'time' }, { ...options })
  }

  public static datetime(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.field('datetime', key, { ...templateOptions }, { ...options })
  }

  public static rating(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return AdminUiFormField.field('rating', key, { ...templateOptions }, { ...options })
  }
}
