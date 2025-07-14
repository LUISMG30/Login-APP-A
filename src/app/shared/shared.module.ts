
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ]
})
export class SharedModule {}
