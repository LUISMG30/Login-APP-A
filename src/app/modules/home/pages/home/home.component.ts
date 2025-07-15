import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.checkLogin();

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.checkLogin();
      }
    });
  }

  checkLogin() {
    const token = localStorage.getItem('Token');
    this.isLoggedIn = !!token;
  }
}
  


