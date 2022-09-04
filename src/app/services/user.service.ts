import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(data : any)
  {
    // return this.http.post<any>(`${this.apiUrl}/add_user/user`,data)
    return this.http.post<any>("http://localhost:3000/users",data)
    // .subscribe(res=>{
    //   alert("Signed up!");

    // })

  }

}
