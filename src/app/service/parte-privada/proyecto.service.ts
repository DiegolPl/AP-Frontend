import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  constructor(private http: HttpClient) { }

  addProyecto(proyecto:any):Observable<any>{
    return this.http.post("http://localhost:8080/proyectos/crear", proyecto);
  }

  getProyecto(id: number):Observable<any>{
    return this.http.get(`http://localhost:8080/proyectos/proyecto/${id}`);
  }

  editProyecto(proyecto:any):Observable<any>{
    return this.http.put("http://localhost:8080/proyectos/editar", proyecto);
  }

  deleteProyecto(id: number):Observable<any>{
    return this.http.delete(`http://localhost:8080/proyectos/delete/${id}`);
  }
}
