import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { PersonaModel } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas: Observable<PersonaModel>;

  constructor(db: AngularFirestore) {
    this.personas = 
  }
}
