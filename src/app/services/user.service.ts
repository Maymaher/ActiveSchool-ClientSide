import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from "rxjs/operators";
import * as AppUtil from '../common/app.util';
import { StudentService } from '../services/student.service';
import { error } from '@angular/compiler/src/util';

 



@Injectable({
  providedIn: 'root'
})
export class UserService {
  status:any={
    "status":false
  }
  

  constructor(private _http:Http,  
    public _studentService:StudentService) { }


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
    this.status.status=false;
    this._studentService.updateStudentLoginStatus(this.getCurrentUser().id,this.status).subscribe(resp =>{
    console.log("update logout");
      
    })
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

  deleteUser(user_id:any){
    const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.delete(`http://localhost:3200/student/${user_id}`,{headers})
      .pipe(map(resp=>resp.json()));
    }

    updateUser(user_id:any,user:any){
      const headers = new Headers();
      this.createAuthHeader(headers);
      return this._http.patch(`http://localhost:3200/student/${user_id}`,user)
        .pipe(map(resp=>resp.json()));
      }
  
      getUserById(id:any){
        const headers = new Headers();
        this.createAuthHeader(headers);
        return this._http.get(`http://localhost:3200/student/${id}`,{headers})
          .pipe(map(resp=>resp.json()));
      }

  
}
