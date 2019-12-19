import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PersonaDialogComponent } from './../../dialogs/persona-dialog/persona-dialog.component';
import { PersonaModel } from 'src/app/models/persona.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  openPersonaDialog(): void {
    const personaDialog = this.dialog.open(PersonaDialogComponent, {
      data: new PersonaModel()
    });
  }

}
