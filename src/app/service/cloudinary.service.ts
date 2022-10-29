import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  constructor(private http:HttpClient) { }

  uploadImage(values:any):Observable<any>{
    let data = values;
    return this.http.post("https://api.cloudinary.com/v1_1/apalmacen/image/upload",data);
  };
}
