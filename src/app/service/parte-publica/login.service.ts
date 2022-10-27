import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  consultarUsuario(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/login/verificar",data);
  }

}
