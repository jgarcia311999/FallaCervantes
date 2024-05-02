import { Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  // Función para registrar un nuevo usuario con correo electrónico y contraseña
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Función para iniciar sesión con correo electrónico y contraseña
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Función para cerrar sesión
  logout() {
    return signOut(this.auth);
  }

  // Función para obtener el usuario actualmente autenticado
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
