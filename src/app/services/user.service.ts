import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import * as AppUtil from '../common/app.util';
 



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:Http) { }
  //Call login api
 
  //Save user data in local storage
  
  //Check user is logged in
  isLoggedIn() :boolean {
    
    return !!localStorage.getItem(AppUtil.AUTH_TOKEN);
  }

  logOut() {
    localStorage.removeItem(AppUtil.AUTH_TOKEN);
    localStorage.removeItem(AppUtil.USER_INFO);
  }


  createAccount(user:any) {
   
    return this._http.post('http://localhost:3000/api/register', user).pipe(map((resp:any) => resp.json()));
  }
 
  auth(user:any) {
    return this._http.post('http://localhost:3000/api/login', user)
      .pipe(map((resp:any)=> resp.json()));
  }
 
  saveUserDate(token:any, user:any) {
    localStorage.setItem(AppUtil.AUTH_TOKEN, token);
    localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(user));
  }
 
  getCurrentUser() {
    return JSON.parse(localStorage.getItem(AppUtil.USER_INFO) || '{}');
  }
  

  
}
