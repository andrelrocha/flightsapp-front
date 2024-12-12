import { Component } from '@angular/core';

import { AppErrorStateMatcher, CpfFormControl, EmailFormControl, PasswordFormControl, StringFormControl } from 'src/app/utils/formControl';
import { BrPhoneFormControl } from 'src/app/utils/formControl/brazilian-phone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  emailFormControl = new EmailFormControl();
  passwordFormControl = new PasswordFormControl(true);
  nameFormControl = new StringFormControl({
    required: true,
    minLength: 3
  });
  cpfFormControl = new CpfFormControl(true);
  brazilianPhoneFormControl = new BrPhoneFormControl(true);
  matcher = new AppErrorStateMatcher();

  isPasswordVisible = false;
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    const form = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value,
      name: this.nameFormControl.value,
      cpf: this.cpfFormControl.value,
      phone: this.brazilianPhoneFormControl.value
    };

    console.log(form);
    console.log('Formulário enviado');
  }
}
