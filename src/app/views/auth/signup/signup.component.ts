import { Component } from '@angular/core';
import { format } from 'date-fns';

import { AppErrorStateMatcher, CpfFormControl, EmailFormControl, PasswordFormControl, StringFormControl } from 'src/app/utils/formControl';
import { BrPhoneFormControl } from 'src/app/utils/formControl/brazilian-phone';
import { DateFormControl } from 'src/app/utils/formControl/date';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  emailFormControl = new EmailFormControl();
  nameFormControl = new StringFormControl({
    required: true,
    minLength: 3
  });
  usernameFormControl = new StringFormControl({
    required: true,
    minLength: 2
  });
  cpfFormControl = new CpfFormControl(true);
  brazilianPhoneFormControl = new BrPhoneFormControl(true);
  birthDateFormControl = new DateFormControl({
    required: true,
    minAge: 18
  })
  passwordFormControl = new PasswordFormControl(true);

  matcher = new AppErrorStateMatcher();

  isPasswordVisible = false;
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    const birthDate: any = this.birthDateFormControl.value;
    const formattedDate = birthDate instanceof Date
    ? format(birthDate, 'yyyy-MM-dd')
    : null;

    const form = {
      login: this.emailFormControl.value,
      name: this.nameFormControl.value,
      username: this.usernameFormControl.value,
      socialNumber: this.cpfFormControl.value,
      phone: this.brazilianPhoneFormControl.value,
      birthday: formattedDate,
      password: this.passwordFormControl.value,
    };

    console.log(form);
    console.log('Formulário enviado');
  }
}
