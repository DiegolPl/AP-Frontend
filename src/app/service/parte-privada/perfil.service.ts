import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getPerfil(id:number):Observable<any>{
    return this.http.get(`http://localhost:8080/perfil/${id}`);
  }
  
  editPerfil(perfil:any):Observable<any>{
    return this.http.put("http://localhost:8080/perfil/editar", perfil, {headers: {"Content-Type":"multipart/form-data; boundary=----WebKitFormBoundaryWirmvD3mchDxjJob"}});
  }
  
  editPerfilSinFoto(perfil:any):Observable<any>{
    return this.http.put("http://localhost:8080/perfil/editar-sin-foto",perfil);
  }
}
