/* Este servicio proporciona métodos para interactuar con eventos en la base de datos Firestore. */

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, query, where, getDocs, getDoc } from '@angular/fire/firestore';
import  NuevoEvento  from '../interfaces/eventos.interface';
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
  deleteEvent(eventId: string, eventTitle: string): Promise<void> {
    const eventDocRef = doc(this.firestore, 'eventos', eventId);

    return getDoc(eventDocRef).then(docSnapshot => {
      if (docSnapshot.exists()) {
        const eventData = docSnapshot.data();
        const events = eventData['eventos'] as Array<{ titulo: string; descripcion: string; }>;

        // Encuentra los eventos que NO se van a eliminar
        const remainingEvents = events.filter(event => !(event.titulo === eventTitle));

        // Si el array resultante tiene menos elementos y no está vacío, actualiza el documento sin el evento específico
        if (remainingEvents.length < events.length) {
          if (remainingEvents.length === 0) {
            // Si no quedan eventos, considera eliminar todo el documento
            return deleteDoc(eventDocRef)
              .then(() => console.log('Documento completo eliminado, no quedan eventos.'))
              .catch(error => console.error('Error eliminando documento completo:', error));
          } else {
            // Actualiza el documento sin el evento específico
            return updateDoc(eventDocRef, {
              eventos: remainingEvents
            })
              .then(() => console.log('Evento eliminado del documento.'))
              .catch(error => console.error('Error actualizando el documento sin el evento:', error));
          }
        } else {
          console.log('No se encontró un evento con el título dado para eliminar, o hay múltiples eventos con el mismo título.');
          return Promise.resolve(); // Asegúrate de retornar una promesa incluso si no haces una operación de Firestore
        }
      } else {
        console.log('No se encontró el documento con el ID especificado.');
        return Promise.resolve(); // Retorna una promesa cuando no existe el documento
      }
    }).catch(error => {
      console.error('Error accediendo al documento:', error);
      return Promise.reject(error); // Retorna una promesa rechazada cuando hay un error accediendo al documento
    });
  }

  async updateEvent(eventId: string, event: NuevoEvento): Promise<void> {
    const eventDocRef = doc(this.firestore, `eventos/${eventId}`);
    try {
      await updateDoc(eventDocRef, { ...event });
      console.log('Evento actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar el evento:', error);
      throw error;
    }
  }

  
}
