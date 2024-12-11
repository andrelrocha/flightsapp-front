import { FormControl, Validators } from '@angular/forms';

export class PasswordFormControl extends FormControl {
  constructor(showValidation: boolean) {
    const validators = [Validators.required];

    if (showValidation) {
      validators.push(Validators.minLength(8));
      validators.push(Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/));
    }

    super('', validators);
  }
}
