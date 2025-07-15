import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    console.log('Login() ejecutado');

    this.loginService.getUsuarios().subscribe((users: any[]) => {

      const userFound = users.find((user) =>
        user.username === this.username && user.password === this.password
      );

      if (userFound) {
        const tokenData = {
          username: userFound.username,
          rol: userFound.rol
        };
        localStorage.setItem('Token', JSON.stringify(tokenData));

        alert('Inicio de sesión exitoso');
        this.router.navigate(['/']);
        this.loginService.setIsLogued(true);
      } else {
        alert('Usuario o contraseña incorrectos');
      }

    }, (error: any) => {
      console.error('Error al cargar los usuarios:', error);
      alert('Error al conectar con el servidor');
    });
  }

}
