import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  adultsCounter: number;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { adultsCounter: number }
  ) {
    this.adultsCounter = data.adultsCounter;
  }

  increment() {
    this.adultsCounter++;
  }

  decrement() {
    if (this.adultsCounter > 1) {
      this.adultsCounter--;
    }
  }

  confirmSelection() {
    this.dialogRef.close(this.adultsCounter);
  }
}
