import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from "rxjs/operators";
import * as AppUtil from '../common/app.util';
 




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:Http) { }


  createAuthHeader(headers:Headers){
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    headers.append('Authorization',`Bearer ${token}`);
  }
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
   
    return this._http.post('http://localhost:3200/api/register', user).pipe(map((resp:any) => resp.json()));
  }
 
  auth(user:any) {
    return this._http.post('http://localhost:3200/api/login', user)
      .pipe(map((resp:any)=> resp.json()));
  }
 
  saveUserDate(token:any, user:any) {
    localStorage.setItem(AppUtil.AUTH_TOKEN, token);
    localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(user));
  }
 
  getCurrentUser() {
    return JSON.parse(localStorage.getItem(AppUtil.USER_INFO) || '{}');
  }
  

  deleteUser(user_id:any){
    const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.delete(`http://localhost:3200/student/${user_id}`,{headers})
      .pipe(map(resp=>resp.json()));
    }

  
}
