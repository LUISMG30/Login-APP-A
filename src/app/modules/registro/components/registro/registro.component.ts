import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/interfaces/user-interface';
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
  user: User | undefined
  isLogued: boolean = false;
  password: any;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  registrar() {

    this.loginService.registrarUsuario(this.user).subscribe(() => {
      alert('Registro exitoso');
      this.router.navigate(['/']);
      this.isLogued = true;
    }, (error: any) => {
      console.error('Error al registrar el usuario:', error);
      alert('Error al registrar el usuario');
    });
  }
}
