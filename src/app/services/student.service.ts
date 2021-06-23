import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import * as AppUtil from '../common/app.util';
import { Observable } from 'rxjs';

const user = {
  name: "",
  email: "",
  password: "",
  address:"",
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:Http) { }


  getCurrentUser() {
    return JSON.parse(localStorage.getItem(AppUtil.USER_INFO) || '{}');
  }
  
 
  profileInfo() {
    return this._http.get(`http://localhost:3200/student/ProfileInfo/${this.getCurrentUser().id}`)
    .pipe(
    map((users: any) => {
  users.map((user:any) => {
    return {
    name: user.name,
    email: user.email,
    address: user.address
    }
    })
    })
    );
    }

 
  

}
