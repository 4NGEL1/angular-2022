import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingleUserResponse, User, UserResponse } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserResponse>{
    return this.http.get<UserResponse>(`${environment.apiurl}/users`);
  }

  getSingleUser(id:Number){
    return this.http.get<SingleUserResponse>(`${environment.apiurl}/users/${id}`);
  }

}
