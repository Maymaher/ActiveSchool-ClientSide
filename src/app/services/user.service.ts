import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as AppUtil from '../common/app.util';
import { User } from '../user';
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

  logOut() {
    localStorage.removeItem(AppUtil.AUTH_TOKEN);
    localStorage.removeItem(AppUtil.USER_INFO);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(AppUtil.USER_INFO) || '{}');
  }
  

  
}
