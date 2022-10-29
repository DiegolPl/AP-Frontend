import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiServerUrl = 'https://apbackdiego.herokuapp.com/';

  constructor(private http: HttpClient) { }

  addExperiencia(experiencia:any):Observable<any>{
    return this.http.post(`${this.apiServerUrl}experiencias/crear`, experiencia);
  }

  getExperiencia(id: number):Observable<any>{
    return this.http.get(`${this.apiServerUrl}experiencias/exp/${id}`);
  }

  editExperiencia(experiencia:any):Observable<any>{
    return this.http.put(`${this.apiServerUrl}experiencias/editar`, experiencia);
  }

  deleteExperiencia(id: number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}experiencias/delete/${id}`);
  }
}
