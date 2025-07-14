import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionComponent } from './components/sesion/sesion.component';
import { SesionRoutingModule } from './sesion-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SesionComponent],
  imports: [
    CommonModule,
    SesionRoutingModule,
    SharedModule
  ]
})
export class SesionModule { }
