
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/usuarios';

  // Estado de autenticación
  private isLoguedSubject = new BehaviorSubject<boolean>(false);
  isLogued$ = this.isLoguedSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Obtener usuarios
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Registrar usuario
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  // Actualizar el estado de autenticación
  setIsLogued(value: boolean): void {
    this.isLoguedSubject.next(value);
  }

  // Obtener el estado actual de autenticación
  getIsLogued(): boolean {
    return this.isLoguedSubject.value;
  }

}



