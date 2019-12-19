import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [
        HeaderComponent,
        NotfoundComponent
    ],
    exports: [
        HeaderComponent,
        NotfoundComponent
    ],
    imports: [
        MatToolbarModule,
        MatMenuModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule
    ],
    providers: [],
})

export class SharedModule { }
