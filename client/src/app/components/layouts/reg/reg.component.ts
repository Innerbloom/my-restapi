import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  regForm!: FormGroup;
  error: any;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.regForm = new FormGroup({
      'username': new FormControl('', [Validators.required,
        Validators.pattern(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)]),
      'password': new FormControl('', [Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }



  regSubmited() {
    this.regForm.disable()
    this.authService.regUser(this.regForm.value).subscribe( () => {
      this.router.navigate(['login'])
      alert("Вы успещно зарегестрировались")
    }, (error) => {
      this.regForm.enable()
      if (error.status == 403) {
        this.error = "The user exists.";
      } else {
        this.error = "Registration error.";
      }
    })
  }


}
