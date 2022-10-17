import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {token} from "morgan";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error: any;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required,
        Validators.pattern(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)]),
      'password': new FormControl('', [Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })

    if (this.authService.isLoggedIn()){
      this.router.navigate(['mainpage']);
    }
  }

  submitLogin() {
    if(this.loginForm.valid){
      this.authService.loginUser(this.loginForm.value).subscribe(result => {
        localStorage.setItem('token', result);
        alert(result.message);
        this.router.navigate(['mainpage']);
      },(error) =>  {
        if (error.status == 401) {
          this.error = "Wrong password.";
        } else if (error.status == 400) {
          this.error = "The user does not exist.";
        } else {
          this.error = "Login error.";
        }
      })
    }
  }
}
