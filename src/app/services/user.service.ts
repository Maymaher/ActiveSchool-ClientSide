import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {User} from '../user';
import * as AppUtil from '../common/app.util';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  //Call login api
  auth(user:any) :Observable<User>{
    let url="http://localhost:3000/api/login";
    return this.http.post<User>(url,user);
    
  }

  //Save user data in local storage
  saveUserDate(token:any, user:any) {
    localStorage.setItem(AppUtil.AUTH_TOKEN, token);
    localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(user));
  }
  //Check user is logged in
  isLoggedIn() :boolean {
    
    return !!localStorage.getItem(AppUtil.AUTH_TOKEN);
  }


  

  
}
