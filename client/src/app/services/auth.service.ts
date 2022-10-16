import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl = "http://localhost:3000/login/"

  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    this.router.navigate(['login']);
  }


  loginUser(body: any): Observable <any> {
    return this.http.post(this.apiUrl, body);
  }
}

