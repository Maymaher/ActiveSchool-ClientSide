import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as AppUtil from '../common/app.util';
import { User } from '../user';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Http } from '@angular/http';
 
import { map } from "rxjs/operators";
import { error } from '@angular/compiler/src/util';



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
  
  getteacher(id:any){
    return this._http.get('http://localhost:3200/teacher/'+id).pipe(map((resp:any)=> resp.json()));
  }

  getCoursesOfTeacher(id:any){
    return this._http.get('http://localhost:3200/teacher/'+id+'/levels').pipe(map((resp:any)=> resp.json()));

  }

  upload(exam:any,file:File)
  {
    const formData:FormData = new FormData();
    formData.append('file',file)
    formData.append('course',exam.course);
    formData.append('from',exam.from);
    formData.append('to',exam.to);
    formData.append('date',exam.date);
    formData.append('teacher',exam.teacher);


    console.log(formData);
   
      return this._http.post('http://localhost:3200/gallery', formData)
      .pipe(map((resp:any)=> resp.json()));
      
    
    


  }

  
}
