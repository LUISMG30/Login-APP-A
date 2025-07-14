import { NgModule } from '@angular/core';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegistroComponent],
  imports: [SharedModule, RegistroRoutingModule]
})
export class RegistroModule {}
