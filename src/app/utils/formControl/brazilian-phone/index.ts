import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

export class BrPhoneFormControl extends FormControl {

  constructor(required: boolean) {
    super('', []);

    const validators = [];
    const pattern = /^[0-9]{11}$/;
    validators.push(Validators.pattern(pattern));

    if (required) {
      validators.push(Validators.required);
    }

    validators.push(this.brazilianPhoneValidator());

    this.setValidators(validators);
  }

  private brazilianPhoneValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const phoneValue = control.value;

      if (phoneValue) {
        const phoneNumberUtil = PhoneNumberUtil.getInstance();
        try {
          const number = phoneNumberUtil.parse(phoneValue, 'BR');
          if (!phoneNumberUtil.isValidNumber(number)) {
            return { invalidPhone: true };
          }
        } catch (error) {
          return { invalidPhone: true };
        }
      }

      return null;
    };
  }
}
