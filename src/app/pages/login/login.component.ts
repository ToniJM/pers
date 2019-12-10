import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  rememberme = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit() {
    this.user = new UserModel();

    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email');
      this.rememberme = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) { return; }

    this.waiting = true;
    form.form.disable();

    this.auth.login(this.user)
      .subscribe(res => {
        if (this.rememberme) {
          localStorage.setItem('email', this.user.email);
        } else {
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/home');
      }, (err) => {
        this.waiting = false;
        form.form.enable();
        this.snackbar.open(err.error.error.message, 'Cerrar', {
          duration: 2000
        });
      });
  }
}
