import { Component } from '@angular/core';

import { AppErrorStateMatcher, EmailFormControl, PasswordFormControl } from 'src/app/utils/formControl';
import { ShowAlertService } from 'src/app/service/alert/showAlert';
import { SignInDTO } from 'src/app/dtos/signinDTO';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  emailFormControl = new EmailFormControl();
  passwordFormControl = new PasswordFormControl(false);
  matcher = new AppErrorStateMatcher();

  constructor(private alertService: ShowAlertService) {}

  onSubmit() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      const email = this.emailFormControl.value;
      const password = this.passwordFormControl.value;
      const loginData = new SignInDTO(email, password);

      console.log(loginData);

      this.alertService.showAlert('Login realizado com sucesso!', 'success');
    } else {
      this.alertService.showAlert('Login inválido!', 'error');
      console.log('Form is invalid');
    }
  }
}
