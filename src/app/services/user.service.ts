import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 
import { map } from "rxjs/operators";
import * as AppUtil from '../common/app.util';


///////////////

 

@Injectable()
export class UserService {

 constructor(private _http:Http) { }

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
   return JSON.parse(localStorage.getItem(AppUtil.USER_INFO) || '{}') ;
 }
}
