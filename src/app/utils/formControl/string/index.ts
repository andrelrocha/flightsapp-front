import { FormControl, Validators } from '@angular/forms';

interface StringFormControlDTO {
  required?: boolean;
  pattern?: string;
  minLength?: number;
}

export class StringFormControl extends FormControl {
  constructor(params: StringFormControlDTO) {
    const validators = [];

    if (params.required) {
      validators.push(Validators.required);
    }
    if (params.pattern) {
      validators.push(Validators.pattern(params.pattern));
    }
    if (params.minLength) {
      validators.push(Validators.minLength(params.minLength));
    }

    super('', validators);
  }
}
