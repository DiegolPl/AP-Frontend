import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/parte-publica/header/header.component';
import { BannerComponent } from './componentes/parte-publica/banner/banner.component';
import { LoginModalComponent } from './componentes/parte-publica/login-modal/login-modal.component';
import { PerfilComponent } from './componentes/parte-publica/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciasComponent } from './componentes/parte-publica/experiencias/experiencias.component';
import { EducacionesComponent } from './componentes/parte-publica/educaciones/educaciones.component';
import { HysComponent } from './componentes/parte-publica/hys/hys.component';
import { ProyectosComponent } from './componentes/parte-publica/proyectos/proyectos.component';
import { FooterComponent } from './componentes/parte-publica/footer/footer.component';
import { PartePublicaComponent } from './componentes/parte-publica/parte-publica/parte-publica.component';
import { PartePrivadaComponent } from './componentes/parte-privada/parte-privada/parte-privada.component';
import { MenuDashboardComponent } from './componentes/parte-privada/dashboard/menu-dashboard/menu-dashboard.component';
import { BodyDashboardComponent } from './componentes/parte-privada/dashboard/body-dashboard/body-dashboard.component';
import { PerfilEditComponent } from './componentes/parte-privada/perfil/perfil-edit/perfil-edit.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducacionNewComponent } from './componentes/parte-privada/educacion/educacion-new/educacion-new.component';
import { EducacionEditComponent } from './componentes/parte-privada/educacion/educacion-edit/educacion-edit.component';
import { EducacionDeleteComponent } from './componentes/parte-privada/educacion/educacion-delete/educacion-delete.component';
import { ExperienciaNewComponent } from './componentes/parte-privada/experiencia/experiencia-new/experiencia-new.component';
import { ExperienciaEditComponent } from './componentes/parte-privada/experiencia/experiencia-edit/experiencia-edit.component';
import { ExperienciaDeleteComponent } from './componentes/parte-privada/experiencia/experiencia-delete/experiencia-delete.component';
import { HabilidadesNewComponent } from './componentes/parte-privada/habilidades/habilidades-new/habilidades-new.component';
import { HabilidadesEditComponent } from './componentes/parte-privada/habilidades/habilidades-edit/habilidades-edit.component';
import { HabilidadesDeleteComponent } from './componentes/parte-privada/habilidades/habilidades-delete/habilidades-delete.component';
import { ProyectoNewComponent } from './componentes/parte-privada/proyectos/proyecto-new/proyecto-new.component';
import { ProyectoEditComponent } from './componentes/parte-privada/proyectos/proyecto-edit/proyecto-edit.component';
import { ProyectoDeleteComponent } from './componentes/parte-privada/proyectos/proyecto-delete/proyecto-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LoginModalComponent,
    PerfilComponent,
    ExperienciasComponent,
    EducacionesComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    PartePublicaComponent,
    PartePrivadaComponent,
    MenuDashboardComponent,
    BodyDashboardComponent,
    PerfilEditComponent,
    EducacionNewComponent,
    EducacionEditComponent,
    EducacionDeleteComponent,
    ExperienciaNewComponent,
    ExperienciaEditComponent,
    ExperienciaDeleteComponent,
    HabilidadesNewComponent,
    HabilidadesEditComponent,
    HabilidadesDeleteComponent,
    ProyectoNewComponent,
    ProyectoEditComponent,
    ProyectoDeleteComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
