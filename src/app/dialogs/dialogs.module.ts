import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';


import { PersonaDialogComponent } from './persona-dialog/persona-dialog.component';

@NgModule({
    declarations: [
        PersonaDialogComponent
    ],
    exports: [
        PersonaDialogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatMomentDateModule,
        MatDatepickerModule,
        MatSelectModule,
        MatListModule
    ],
    providers: [],
    entryComponents: [
        PersonaDialogComponent
    ]
})

export class DialogsModule { }
