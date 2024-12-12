import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AppErrorStateMatcher, EmailFormControl, PasswordFormControl } from 'src/app/utils/formControl';
import { ShowAlertService } from 'src/app/service/notification/showAlert';
import { SignInDTO } from 'src/app/dtos/signinDTO';
import { SignInUseCase } from 'src/app/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  emailFormControl = new EmailFormControl();
  passwordFormControl = new PasswordFormControl(false);
  matcher = new AppErrorStateMatcher();

  constructor(
    private alertService: ShowAlertService,
    private signInUseCase: SignInUseCase,
    private cookieService: CookieService
  ) {}

  isPasswordVisible = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    (async () => {
      try {
        if (this.emailFormControl.valid && this.passwordFormControl.valid) {
          const email = this.emailFormControl.value;
          const password = this.passwordFormControl.value;
          const loginData = new SignInDTO(email, password);

          const apiReturn = await this.signInUseCase.signIn(loginData);

          this.cookieService.set('auth', apiReturn.accessToken, 1 / 24);

          this.alertService.showAlert('Login realizado com sucesso!', 'success');
        } else {
          this.alertService.showAlert('Dados inválidos, preencha os campos corretamente.', 'error');
        }
      } catch (error) {
        this.alertService.showAlert(String(error), 'error');
      }
    })();
  }
}
