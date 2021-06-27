import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import * as AppUtil from '../common/app.util';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private _http:Http) { }

  createAuthHeader(headers:Headers){
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    headers.append('Authorization',`Bearer ${token}`);
  }

  getTeachers(){
  
  const headers = new Headers();
  this.createAuthHeader(headers);
  return this._http.get('http://localhost:3200/teacher',{headers})
    .pipe(map(resp=>resp.json()));
  }

  getTeacherById(id:any){
  
    const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.get(`http://localhost:3200/teacher/${id}`,{headers})
      .pipe(map(resp=>resp.json()));
    }

  getTeacherCourse(id:any){
    const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.get(`http://localhost:3200/teacher/${id}/courses`,{headers})
      .pipe(map(resp=>resp.json()));

  }

  getTeacherLevels(id:any){
    const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.get(`http://localhost:3200/teacher/${id}/levels`,{headers})
      .pipe(map(resp=>resp.json()));

  }

  deleteTeacherCourse(id:any,courseId:any){
    const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.delete(`http://localhost:3200/teacher/${id}/courses/${courseId}`,{headers})
      .pipe(map(resp=>resp.json()));
  }




}
