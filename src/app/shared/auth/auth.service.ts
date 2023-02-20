import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post(BACKEND_URL + '/auth/login', data);
  }
  signup(data: any){
    return this.http.post(BACKEND_URL + '/auth/register', data);
  }
}
