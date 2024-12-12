import { Component } from '@angular/core';

import { AppErrorStateMatcher, EmailFormControl, PasswordFormControl, StringFormControl } from 'src/app/utils/formControl';

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
  matcher = new AppErrorStateMatcher();

  isPasswordVisible = false;
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
