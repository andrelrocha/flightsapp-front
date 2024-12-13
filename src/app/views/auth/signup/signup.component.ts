import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

import { AppErrorStateMatcher, BooleanFormControl, BrPhoneFormControl, CpfFormControl, DateFormControl, EmailFormControl,
  PasswordFormControl, StringFormControl
} from 'src/app/utils/formControl';

import { GetAllCountriesUseCase } from 'src/app/api/countries/getAllCountries';
import { ShowAlertService } from 'src/app/service/notification/showAlert';
import { CountriesDTO } from 'src/app/dtos/countriesDTO';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  countries: CountriesDTO[] = [];
  countryFormControl = new FormControl(null);

  async ngOnInit() {
    try {
      const countriesData = await this.getAllCountriesUseCase.getCountriesData();
      this.countries = countriesData;
    } catch (error) {
      this.alertService.showAlert(String(error), 'error');
    }
  }

  constructor(
    private getAllCountriesUseCase: GetAllCountriesUseCase,
    private alertService: ShowAlertService,
  ) {}

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
  refreshTokenControl = new BooleanFormControl();
  themeControl = new BooleanFormControl();

  matcher = new AppErrorStateMatcher();

  isDarkTheme = false;
  toggleDarkTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme');
  }

  isPasswordVisible = false;
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    (async () => {
      try {
        const birthDate: any = this.birthDateFormControl.value;
        const formattedDate = birthDate instanceof Date
        ? format(birthDate, 'yyyy-MM-dd')
        : null;

        const form = {
          login: this.emailFormControl.value,
          name: this.nameFormControl.value,
          username: this.usernameFormControl.value,
          country: this.countryFormControl.value,
          socialNumber: this.cpfFormControl.value,
          phone: this.brazilianPhoneFormControl.value,
          birthday: formattedDate,
          password: this.passwordFormControl.value,
          refreshTokenEnabled: this.refreshTokenControl.value,
          theme: this.themeControl.value ? 'DARK' : 'LIGHT'
        };

        console.log(form);
        console.log('Formulário enviado');
      } catch (error) {
        this.alertService.showAlert(String(error), 'error');
      }
    })();
  }
}
