import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  addEducacion(educacion:any):Observable<any>{
    return this.http.post("http://localhost:8080/educacion/crear", educacion);
  }

  getEducacion(id: number):Observable<any>{
    return this.http.get(`http://localhost:8080/educacion/edu/${id}`);
  }

  editEducacion(educacion:any):Observable<any>{
    return this.http.put("http://localhost:8080/educacion/editar", educacion);
  }

  deleteEducacion(id: number):Observable<any>{
    console.log('el service anda')
    return this.http.delete(`http://localhost:8080/educacion/delete/${id}`);
  }
}
