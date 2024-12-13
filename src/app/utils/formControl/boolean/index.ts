import { FormControl, Validators } from '@angular/forms';

export class BooleanFormControl extends FormControl {
  constructor(required?: boolean) {
    super(false, required ? Validators.required : []);
  }
}
