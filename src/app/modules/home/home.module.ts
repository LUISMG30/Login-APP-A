import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { SesionComponent } from './components/card/sesion.component';
import { FacebookIMGComponent } from './components/facebookIMG/facebookIMG.component';


@NgModule({
  declarations: [
    HomeComponent,
    SesionComponent,
    FacebookIMGComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
