// eventos.service.ts

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import NuevoEvento, { Evento } from '../interfaces/eventos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  constructor(private firestore: Firestore) { }

  addEvent(newEvent: Omit<NuevoEvento, 'id'>) {
    const eventRef = collection(this.firestore, 'eventos');
    return addDoc(eventRef, newEvent);
  }

  getEvents(): Observable<NuevoEvento[]> {
    const eventsRef = collection(this.firestore, 'eventos');
    return collectionData(eventsRef, { idField: 'id' }) as Observable<NuevoEvento[]>;
  }


  deleteEvent(eventId: string) {
    const eventDocRef = doc(this.firestore, `eventos/${eventId}`);
    return deleteDoc(eventDocRef);
  }

  updateEvent(eventId: string, updateData: Partial<NuevoEvento>) {
    const eventDocRef = doc(this.firestore, `eventos/${eventId}`);
    return updateDoc(eventDocRef, updateData);
  }
}
