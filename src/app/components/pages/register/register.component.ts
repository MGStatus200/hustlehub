import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup, FormBuilder} from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/custom-validation.service';
import { UserService } from 'src/app/services/user.service';
import { NgToastService } from 'ng-angular-popup';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signUpForm!:FormGroup;;
  // email=new FormControl ('', [Validators.required, Validators.email])
  hide = true;
  submitted=false;

  constructor(
    private formBuilder:FormBuilder,
    private customvalidator:CustomvalidationService,
    private userservice:UserService,
    private toast:NgToastService,
    private http:HttpClient,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email:new FormControl ('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),this.customvalidator.patternPassValidator()]),
      confirm_password:new FormControl('',[Validators.required]),

    },
    {
      validators: this.customvalidator.passwordMatch('password','confirm_password')
    })
  }

  // RegisterUser()
  // {
  // if(this.signUpForm.valid){
  //   this.userservice.registerUser(this.signUpForm.value)
  //   .pipe(first()).subscribe({
  //     next:(res)=>
  //     {
  //       console.log(res.message);
  //       if(res.message == 'Successful')
  //       {
  //         alert('User registered successfully');
  //         // this.toast.success({detail:"Register Message",summary:"Registered Successfully",duration:4000})
  //         //  this.router.navigate(['login']);

  //       }
  //       else if(res.message == 'Unsuccessful')
  //       {
  //         alert('Email already registered Please re-register')
  //         // this.toast.error({detail:"Email Message",summary:"E-mail already Registered",duration:4000})

  //       }
  //     },
  //     error:()=>{
  //       // this.toast.error({detail:"Register Message",summary:"Unable To Register",duration:4000})
  //      alert('Could no register User ');
  //     }

  //   })
  // }


  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
// }
signup(){
  // this.submitted=true;
  // if(this.signUpForm.valid){
    this.http.post<any>("http://localhost:3000/signup",this.signUpForm.value)
    .subscribe(res=>{
      alert('sumitted suceessfuly');
      this.signUpForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert('not suceessfuly');

    })
    // this.RegisterUser();
  }
}
//}

