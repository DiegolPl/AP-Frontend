import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private apiServerUrl = 'https://apbackdiego.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getPerfil(id:number):Observable<any>{
    return this.http.get(`${this.apiServerUrl}perfil/${id}`);
  }
  
  editPerfil(perfil:any):Observable<any>{
    return this.http.put(`${this.apiServerUrl}perfil/editar`, perfil);
  }

}
