import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';

export class CpfFormControl extends FormControl {

  constructor(required: boolean) {
    super('', []);

    const validators = [];
    const pattern = /^[0-9]{11}$/;
    validators.push(Validators.pattern(pattern));

    if (required) {
      validators.push(Validators.required);
    }

    validators.push(this.cpfValidator());

    this.setValidators(validators);
  }

  private cpfValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const cpfValue = control.value;
      if (cpfValue && !cpf.isValid(cpfValue)) {
        return { invalidCpf: true };
      }
      return null;
    };
  }
}
