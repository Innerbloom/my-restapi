import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Users} from "./interfaces";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl = "http://localhost:3000/login/"
  apiReg = "http://localhost:3000/reg/"

  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    if (confirm('Are you sure?')) {
    localStorage.removeItem('token');
    }
    return this.router.navigate(['login']);
  }


  loginUser(user: Users): Observable <any> {
    return this.http.post(this.apiUrl, user);
  }

  regUser(userReg: Users): Observable<any> {
    return this.http.post(this.apiReg, userReg);
  }
}
