import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RegistroComponent } from './login/registro.component';
import { LoginComponent } from './login/login.component';

import { PagesModule } from './pages/pages.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firabase),
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    DialogsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
