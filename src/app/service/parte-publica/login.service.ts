import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private apiServerUrl = 'https://apbackdiego.herokuapp.com/';
  private apiServerUrl = 'https://ap-backend-vfgk.onrender.com';

  constructor(private http:HttpClient) {}

  consultarUsuario(data:any):Observable<any>{
    return this.http.post(`${this.apiServerUrl}login/verificar`,data);
  }

}
