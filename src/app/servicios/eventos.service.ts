/* Este servicio proporciona métodos para interactuar con eventos en la base de datos Firestore. */

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, query, where, getDocs, getDoc } from '@angular/fire/firestore';
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

  async getEventsByDate(date: string): Promise<NuevoEvento[]> {
    const eventRef = collection(this.firestore, 'eventos');
    const q = query(eventRef, where('date', '==', date));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data() as NuevoEvento;
      return { id: doc.id, ...data };
    });
  }

  async getEventById(eventId: string): Promise<NuevoEvento> {
    const eventDocRef = doc(this.firestore, `eventos/${eventId}`);
    const docSnap = await getDoc(eventDocRef);
  
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() as NuevoEvento };
    } else {
      throw new Error('No se encontró el evento.');
    }
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

  async updateEvent(eventId: string, event: NuevoEvento): Promise<void> {
    const eventDocRef = doc(this.firestore, `eventos/${eventId}`);
    try {
      const updatePayload = {
        date: event.date,
        textColor: event.textColor,
        backgroundColor: event.backgroundColor,
        // Si necesitas actualizar eventos específicos, necesitas hacerlo uno por uno o actualizar todo el array.
        'eventos': event.eventos // Esto reemplaza el array completo. Para operaciones más granulares, consulta la documentación de Firestore.
      };
  
      await updateDoc(eventDocRef, updatePayload);
      console.log('Evento actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar el evento: ', error);
      throw error;
    }
  }
  
}
