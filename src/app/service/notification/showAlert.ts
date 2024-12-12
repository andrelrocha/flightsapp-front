import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ShowAlertService {
  constructor(private snackBar: MatSnackBar) {}

  showAlert(
    message: string,
    type: 'error' | 'success',
    duration: number = 5000
  ): void {
    const panelClass = type === 'error' ? 'error-snackbar' : 'success-snackbar';

    this.snackBar.open(message, 'Fechar', {
      duration,
      panelClass: [panelClass],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
