import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PersonaModel } from 'src/app/models/persona.model';

@Component({
  selector: 'app-persona-dialog',
  templateUrl: './persona-dialog.component.html',
  styleUrls: ['./persona-dialog.component.css']
})
export class PersonaDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PersonaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public persona: PersonaModel
  ) { }

  onCancelClick() {
    console.log('close');
    this.dialogRef.close();
  }

}
