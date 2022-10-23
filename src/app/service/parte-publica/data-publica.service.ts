import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPublicaService {

  constructor(private http:HttpClient) { }

  getPerfil():Observable<any> {
    return this.http.get("http://localhost:8080/perfil/1");
  }

  getExperiencias():Observable<any> {
    return this.http.get("http://localhost:8080/experiencias/listar")
  }

  getEducacion():Observable<any> {
    return this.http.get("http://localhost:8080/educacion/listar")
  }

  getHabilidades():Observable<any> {
    return this.http.get("http://localhost:8080/habilidades/listar")
  }

  getProyectos():Observable<any> {
    return this.http.get("http://localhost:8080/proyectos/listar")
  }
}
