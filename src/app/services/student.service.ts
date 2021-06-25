import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import * as AppUtil from '../common/app.util';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:Http) { }
  createAuthHeader(headers:Headers){
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    headers.append('Authorization',`Bearer ${token}`);
  }

  getstudents(){
  
  const headers = new Headers();
  this.createAuthHeader(headers);
  return this._http.get('http://localhost:3000/student/student',{headers})
    .pipe(map(resp=>resp.json()));
  }

  
}
