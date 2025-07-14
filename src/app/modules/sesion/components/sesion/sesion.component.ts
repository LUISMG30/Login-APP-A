import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('Token');
    if (token) {
      const data = JSON.parse(token);
      this.username = data.username || '';
    }
  }

  cerrarSesion() {
    localStorage.removeItem('Token');
    this.router.navigate(['/']);
  }
}
