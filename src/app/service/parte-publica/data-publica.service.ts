import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPublicaService {

  // private apiServerUrl = 'https://apbackdiego.herokuapp.com/';
  private apiServerUrl = 'https://ap-backend-vfgk.onrender.com/';

  constructor(private http:HttpClient) { }

  getPerfil():Observable<any> {
    return this.http.get(`${this.apiServerUrl}perfil/1`);
  }

  getExperiencias():Observable<any> {
    return this.http.get(`${this.apiServerUrl}experiencias/listar`)
  }

  getEducacion():Observable<any> {
    return this.http.get(`${this.apiServerUrl}educacion/listar`)
  }

  getHabilidades():Observable<any> {
    return this.http.get(`${this.apiServerUrl}habilidades/listar`)
  }

  getProyectos():Observable<any> {
    return this.http.get(`${this.apiServerUrl}proyectos/listar`)
  }
}
