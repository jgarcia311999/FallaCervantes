/* Este servicio proporciona métodos para interactuar con eventos en la base de datos Firestore. */

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, query, where, getDocs } from '@angular/fire/firestore';
import NuevoEvento from '../interfaces/eventos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  constructor(private firestore: Firestore) { }

  /* Agrega un nuevo evento a la colección 'eventos' en Firestore. */
  async addEvent(event: NuevoEvento) {
    const eventRef = collection(this.firestore, 'eventos');

    try {
      const docRef = await addDoc(eventRef, { ...event });
      console.log('Documento agregado con ID: ', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error al agregar el documento: ', error);
      throw error;
    }
  }

  /* Obtiene eventos filtrados por fecha de la colección 'eventos' en Firestore. */
  async getEventsByDate(date: string): Promise<NuevoEvento[]> {
    const eventRef = collection(this.firestore, 'eventos');
    const q = query(eventRef, where('date', '==', date));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data() as NuevoEvento;
      return { id: doc.id, ...data };
    });
  }
  
  /* Actualiza un evento existente en Firestore. */
  async updateEvent(event: NuevoEvento) {
    const eventDocRef = doc(this.firestore, `eventos/${event.id}`);
    const { id, ...eventData } = event; // Excluye la propiedad 'id' del objeto event
    return updateDoc(eventDocRef, eventData);
  }

  /* Obtiene todos los eventos de la colección 'eventos' en Firestore. */
  getEvents(): Observable<NuevoEvento[]> {
    const eventsRef = collection(this.firestore, 'eventos');
    return collectionData(eventsRef, { idField: 'id' }) as Observable<NuevoEvento[]>;
  }

  /* Elimina un evento de la colección 'eventos' en Firestore. */
  deleteEvent(eventId: string) {
    const eventDocRef = doc(this.firestore, `eventos/${eventId}`);
    return deleteDoc(eventDocRef);
  }
}
