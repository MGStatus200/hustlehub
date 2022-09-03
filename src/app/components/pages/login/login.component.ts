import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Login } from 'src/app/models/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//Material Props
    email = new FormControl ('', [Validators.required, Validators.email]);

  login!: Login[];
  hide = true;

constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    // email = new FormControl ('', [Validators.required, Validators.email]),
    // password = new FormControl('')

  })
//form methods
getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}
}
