import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cancion } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private http: HttpClient) { }

  getSong():Observable<Cancion[]>{
    return this.http.get<Cancion[]>(`${environment.api2Url}/song`);
  }

  saveSong(cancion: Cancion): Observable<any>{
    return this.http.post(`${environment.api2Url}/song`,cancion);
  }

  getSingleSong(id:String): Observable<Cancion>{
    return this.http.get<Cancion>(`${environment.api2Url}/song/${id}`);
  }

  editSong(id: String, cancion : Cancion): Observable<any>{
    return this.http.put(`${environment.api2Url}/song/${id}`,cancion);
  }

  deleteSong(id: String): Observable<any>{
    return this.http.delete(`${environment.api2Url}/song/${id}`)
  }

  enlace(nombre: String): String{
    nombre.replace(" ","%20");
    return nombre;
  }
}
