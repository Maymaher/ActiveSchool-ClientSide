import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _http:Http) { }
  createAuthHeader(headers:Headers){
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    headers.append('Authorization',`Bearer ${token}`);
  }

  getUnassignedCourses(id:any){
  
    const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.get(`http://localhost:3200/teacher/${id}/nincourses`,{headers})
      .pipe(map(resp=>resp.json()));
    }

    assignCourseToTeacher(id:any,course:any){
      const headers = new Headers();
      this.createAuthHeader(headers);
      return this._http.post(`http://localhost:3200/teacher/${id}/courses`,course,{headers})
        .pipe(map(resp=>resp.json()));
    }


    getAllCourses(){
      const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.get('http://localhost:3200/courses',{headers})
      .pipe(map(resp=>resp.json()));
    }

    deleteCourse(id:any){
      const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.delete(`http://localhost:3200/courses/${id}`,{headers})
      .pipe(map(resp=>resp.json()));

    }

    updateCourse(id:any,course:any){
      const headers = new Headers();
      this.createAuthHeader(headers);
      return this._http.patch(`http://localhost:3200/courses/${id}`,course,{headers})
        .pipe(map(resp=>resp.json()));

    }
    addCourse(course:any){
      const headers = new Headers();
      this.createAuthHeader(headers);
      return this._http.post('http://localhost:3200/courses', course,{headers})
      .pipe(map(resp=> resp.json()));

    }

    getCourse(id:any){
      const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.get(`http://localhost:3200/courses/${id}`,{headers})
      .pipe(map(resp=>resp.json()));
    }
}
