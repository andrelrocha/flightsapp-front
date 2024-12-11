import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppErrorStateMatcher } from 'src/app/errors/error-state-matcher';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  matcher = new AppErrorStateMatcher();
}
