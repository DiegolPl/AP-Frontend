import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiServerUrl = 'https://apbackdiego.herokuapp.com/';

  constructor(private http: HttpClient) { }

  addProyecto(proyecto:any):Observable<any>{
    return this.http.post(`${this.apiServerUrl}proyectos/crear`, proyecto);
  }

  getProyecto(id: number):Observable<any>{
    return this.http.get(`${this.apiServerUrl}proyectos/proyecto/${id}`);
  }

  editProyecto(proyecto:any):Observable<any>{
    return this.http.put(`${this.apiServerUrl}proyectos/editar`, proyecto);
  }

  deleteProyecto(id: number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}proyectos/delete/${id}`);
  }
}
