import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { DialogDataComponent } from '../dialog-data/dialog-data';
import { Customer } from '../../customer-list/customer.component';

@Component({
  templateUrl: 'dialog-delete-data.html',
  styleUrls: [ 'dialog-delete-data.css' ]
})

export class DialogDeleteDataComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) { }


  // If btn 'YES' pressed
  onYesClick() { this.snack.open('Customer has been deleted! ', 'Success')._dismissAfter(3000); }

  // If btn 'NO' pressed
  onNoClick() {
    this.snack.open('Delete has not complete', 'Unsuccess')._dismissAfter(3000);
    this.dialogRef.close();
  }

}
