import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private apiServerUrl = 'https://apbackdiego.herokuapp.com/';

  constructor(private http:HttpClient) { }

  addHabilidad(habilidad:any):Observable<any>{
    return this.http.post(`${this.apiServerUrl}habilidades/crear`, habilidad);
  }

  getHabilidad(id: number):Observable<any>{
    return this.http.get(`${this.apiServerUrl}habilidades/habilidad/${id}`);
  }

  editHabilidad(habilidad:any):Observable<any>{
    return this.http.put(`${this.apiServerUrl}habilidades/editar`, habilidad);
  }

  deleteHabilidad(id: number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}habilidades/delete/${id}`);
  }
}
