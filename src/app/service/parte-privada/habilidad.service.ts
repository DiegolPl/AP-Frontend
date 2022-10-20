import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  constructor(private http:HttpClient) { }

  addHabilidad(habilidad:any):Observable<any>{
    return this.http.post("http://localhost:8080/habilidades/crear", habilidad);
  }

  getHabilidad(id: number):Observable<any>{
    return this.http.get(`http://localhost:8080/habilidades/habilidad/${id}`);
  }

  editHabilidad(habilidad:any):Observable<any>{
    return this.http.put("http://localhost:8080/habilidades/editar", habilidad);
  }

  deleteHabilidad(id: number):Observable<any>{
    return this.http.delete(`http://localhost:8080/habilidades/delete/${id}`);
  }
}
