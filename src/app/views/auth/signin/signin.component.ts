import { Component } from '@angular/core';
import { EmailFormControl, PasswordFormControl } from 'src/app/utils/formControl';
import { AppErrorStateMatcher } from 'src/app/errors/error-state-matcher';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  emailFormControl = new EmailFormControl();

  passwordFormControl = new PasswordFormControl(false);

  matcher = new AppErrorStateMatcher();
}
