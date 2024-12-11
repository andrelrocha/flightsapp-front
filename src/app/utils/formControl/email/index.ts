import { FormControl, Validators } from '@angular/forms';

export class EmailFormControl extends FormControl {
  constructor() {
    super('', [Validators.required, Validators.email]);
  }
}
