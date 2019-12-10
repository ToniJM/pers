import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';

import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel;
  waiting = false;

  constructor(
    private auth: AuthService,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  login(form: NgForm) {
    if (form.invalid) { return; }

    this.waiting = true;
    form.form.disable();

    this.auth.login(this.user)
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
