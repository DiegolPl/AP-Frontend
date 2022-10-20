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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
