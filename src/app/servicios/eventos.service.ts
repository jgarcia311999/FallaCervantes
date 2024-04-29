import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import NuevoEvento from '../interfaces/eventos.interface';  // Asegúrate de que el nombre del archivo sea correcto
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private firestore: Firestore) { }

  addEvent(event: NuevoEvento) {  // Usamos 'NuevoEvento' como el tipo para 'event'
    const eventRef = collection(this.firestore, 'eventos');
    return addDoc(eventRef, event);
  }

  getEvents(): Observable<NuevoEvento[]> {
    const eventRef = collection(this.firestore, 'eventos');
    return collectionData(eventRef, { idField: 'id' }) as Observable<NuevoEvento[]>;
  }
}
