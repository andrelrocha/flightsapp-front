import { FormControl, Validators } from '@angular/forms';

interface DateFormControlOptions {
  required: boolean;
  minDate?: Date;
  maxDate?: Date;
  minAge?: number;
  isBeforeDate?: Date;
  isAfterDate?: Date;
  allowWeekend?: boolean;
}

export class DateFormControl extends FormControl {
  constructor(options: DateFormControlOptions) {
    const validators = [
      ...(options.required ? [Validators.required] : []),
      DateFormControl.isValidDate,
      ...(options.minDate ? [DateFormControl.minDateValidator(options.minDate)] : []),
      ...(options.maxDate ? [DateFormControl.maxDateValidator(options.maxDate)] : []),
      ...(options.isBeforeDate ? [DateFormControl.isBeforeValidator(options.isBeforeDate)] : []),
      ...(options.isAfterDate ? [DateFormControl.isAfterValidator(options.isAfterDate)] : []),
      ...(options.allowWeekend === false ? [DateFormControl.noWeekendValidator] : []),
      ...(options.minAge ? [DateFormControl.minAgeValidator(options.minAge)] : []),
    ];

    super('', validators);
  }

  static isValidDate(control: FormControl): { [key: string]: boolean } | null {
    const value = control.value;

    if (value && !(value instanceof Date) && isNaN(Date.parse(value))) {
      return { invalidDate: true };
    }

    return null;
  }

  static minDateValidator(minDate: Date) {
    return (control: FormControl): { [key: string]: boolean } | null => {
      const value = new Date(control.value);
      if (value < minDate) {
        return { minDate: true };
      }
      return null;
    };
  }

  static maxDateValidator(maxDate: Date) {
    return (control: FormControl): { [key: string]: boolean } | null => {
      const value = new Date(control.value);
      if (value > maxDate) {
        return { maxDate: true };
      }
      return null;
    };
  }

  static minAgeValidator(minAge: number) {
    return (control: FormControl): { [key: string]: boolean } | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const currentDate = new Date();
      const birthDate = new Date(value);

      let age = currentDate.getFullYear() - birthDate.getFullYear();
      const monthDiff = currentDate.getMonth() - birthDate.getMonth();
      const dayDiff = currentDate.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      if (age < minAge) {
        return { minAge: true };
      }

      return null;
    };
  }

  static isBeforeValidator(date: Date) {
    return (control: FormControl): { [key: string]: boolean } | null => {
      const value = new Date(control.value);
      if (value >= date) {
        return { isNotBefore: true };
      }
      return null;
    };
  }

  static isAfterValidator(date: Date) {
    return (control: FormControl): { [key: string]: boolean } | null => {
      const value = new Date(control.value);
      if (value <= date) {
        return { isNotAfter: true };
      }
      return null;
    };
  }

  static noWeekendValidator(control: FormControl): { [key: string]: boolean } | null {
    const value = new Date(control.value);
    const day = value.getDay();
    if (day === 0 || day === 6) {
      return { weekendNotAllowed: true };
    }
    return null;
  }
}
