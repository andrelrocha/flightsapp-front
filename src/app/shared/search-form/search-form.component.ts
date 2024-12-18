import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  toggleControl = new FormControl('round-trip');

  constructor(public dialog: MatDialog) {}
  adultsCount = 1;

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { adultsCounter: this.adultsCount }, // Passa o valor atual para o modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.adultsCount = result; // Atualiza o contador
        console.log('Número de adultos atualizado:', this.adultsCount);
      }
    });
  }

  handleAdultsUpdate(newCount: number) {
    this.adultsCount = newCount;
  }
}
