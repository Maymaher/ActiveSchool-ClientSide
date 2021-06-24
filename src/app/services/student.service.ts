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
  
 
  profileInfo(id:any) {
    // console.log(this.getCurrentUser().id);
    // let id="60d23125b268c730beff34b7";
    return this._http.get('http://localhost:3000/student/ProfileInfo/'+id).pipe(map((resp:any)=>resp.json()))

  
  }

  getStudentSchedular(id:any){

    return this._http.get('http://localhost:3000/student/schedual/'+id).pipe(map((resp:any)=>resp.json()))

  }

  getStudentSturdaySchedular(id:any){

    return this._http.get('http://localhost:3000/student/schedual/sturday/'+id).pipe(map((resp:any)=>resp.json()))

  }

  getStudentSundaySchedular(id:any){

    return this._http.get('http://localhost:3000/student/schedual/sunday/'+id).pipe(map((resp:any)=>resp.json()))

  }
  getStudentMondaySchedular(id:any){

    return this._http.get('http://localhost:3000/student/schedual/monday/'+id).pipe(map((resp:any)=>resp.json()))

  }

  getStudentTusdaySchedular(id:any){

    return this._http.get('http://localhost:3000/student/schedual/tusday/'+id).pipe(map((resp:any)=>resp.json()))

  }
  getStudentWensdaySchedular(id:any){

    return this._http.get('http://localhost:3000/student/schedual/wensday/'+id).pipe(map((resp:any)=>resp.json()))

  }

  getStudentThrisdaySchedular(id:any){

    return this._http.get('http://localhost:3000/student/schedual/thrisday/'+id).pipe(map((resp:any)=>resp.json()))

  }







}
