import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  username: string = '';
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  registrar() {
    if (!this.username || !this.nombre || !this.correo || !this.telefono || !this.password) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const nuevoUsuario = {
      username: this.username,
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      password: this.password,
      rol: 'Usuario',
      activo: true
    };

    this.loginService.registrarUsuario(nuevoUsuario).subscribe(() => {
      alert('Registro exitoso');
      this.router.navigate(['/']);
    }, (error: any) => {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario');
    });
  }
}
