import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  constructor(private http: HttpClient) { }

  addExperiencia(experiencia:any):Observable<any>{
    return this.http.post("http://localhost:8080/experiencias/crear", experiencia);
  }

  getExperiencia(id: number):Observable<any>{
    return this.http.get(`http://localhost:8080/experiencias/exp/${id}`);
  }

  editExperiencia(experiencia:any):Observable<any>{
    return this.http.put("http://localhost:8080/experiencias/editar", experiencia);
  }

  deleteExperiencia(id: number):Observable<any>{
    return this.http.delete(`http://localhost:8080/experiencias/delete/${id}`);
  }
}
