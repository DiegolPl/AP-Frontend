import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiServerUrl = 'https://apbackdiego.herokuapp.com/';

  constructor(private http: HttpClient) { }

  addEducacion(educacion:any):Observable<any>{
    return this.http.post(`${this.apiServerUrl}educacion/crear`, educacion);
  }

  getEducacion(id: number):Observable<any>{
    return this.http.get(`${this.apiServerUrl}educacion/edu/${id}`);
  }

  editEducacion(educacion:any):Observable<any>{
    return this.http.put(`${this.apiServerUrl}educacion/editar`, educacion);
  }

  deleteEducacion(id: number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}educacion/delete/${id}`);
  }
}
