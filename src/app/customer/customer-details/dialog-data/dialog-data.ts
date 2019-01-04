import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../customer-details.component';

@Component ({
  templateUrl: 'dialog-data.html',
  styleUrls: ['dialog-data.css']
})

export class DialogDataComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  // Btn 'NO' click
  onNoClick(): void {
    console.log('Dialog closed!');
    this.dialogRef.close();
  }
}
