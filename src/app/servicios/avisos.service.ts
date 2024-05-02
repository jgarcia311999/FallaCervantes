
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import Aviso from '../interfaces/avisos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  constructor(private firestore: Firestore) { }

  addNotification(newNotification: Omit<Aviso, 'id'>) {
    const notificationRef = collection(this.firestore, 'avisos');
    return addDoc(notificationRef, newNotification);
  }

  getNotifications(): Observable<Aviso[]> {
    const notificationRef = collection(this.firestore, 'avisos');
    return collectionData(notificationRef, { idField: 'id' }) as Observable<Aviso[]>;
  }


  deleteNotification(notificationId: string) {
    const notificationDocRef = doc(this.firestore, `avisos/${notificationId}`);
    return deleteDoc(notificationDocRef);
  }

  updateNotification(notificationId: string, updateData: Partial<Aviso>) {
    const notificationDocRef = doc(this.firestore, `avisos/${notificationId}`);
    return updateDoc(notificationDocRef, updateData);
  }
}
