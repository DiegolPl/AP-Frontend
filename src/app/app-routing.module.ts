import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartePrivadaComponent } from './componentes/parte-privada/parte-privada/parte-privada.component';
import { PartePublicaComponent } from './componentes/parte-publica/parte-publica/parte-publica.component';
import { VigilanteGuard } from './guards/vigilante.guard';

const routes: Routes = [
  {path: 'index', component: PartePublicaComponent},
  {path: '', component: PartePublicaComponent},
  {path: 'dashboard', component: PartePrivadaComponent,canActivate: [VigilanteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
