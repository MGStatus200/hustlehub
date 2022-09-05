import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { HttpClient } from '@angular/common/http';
import { CustomvalidationService } from 'src/app/services/custom-validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//Material Props
 //email = new FormControl ('', [Validators.required, Validators.email]);

 public loginForm!:FormGroup;
  hide = true;

constructor(
  private router:Router,
  private customValidator:CustomvalidationService,
  private http:HttpClient
) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl ('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),this.customValidator.patternPassValidator()])

    })
  }
onSubmit(){
  this.http.get<any>("http://localhost:3000/users")
  .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });
    if(user){
      alert('Login successful');
      this.loginForm.reset();
      this.router.navigate(['home'])
    }else{
      alert("user not found")
    }

  },err=>{
    alert('Login successful')
  })

}

//form methods
// getErrorMessage() {
//   if (this.email.hasError('required')) {
//     return 'You must enter a value';
//   }

//   return this.email.hasError('email') ? 'Not a valid email' : '';
// }
}
