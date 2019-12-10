import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: UserModel;
  waiting = false;

  constructor(
    private auth: AuthService,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) { return; }

    this.waiting = true;
    form.form.disable();

    this.auth.newUser(this.user)
      .subscribe(res => {
        this.waiting = false;
        form.form.enable();
        this.snackbar.open('Bienvenido', 'Entrar', {
          duration: 2000
        });
      }, (err) => {
        this.waiting = false;
        form.form.enable();
        this.snackbar.open(err.error.error.message, 'Cerrar', {
          duration: 2000
        });
      });
  }

}
