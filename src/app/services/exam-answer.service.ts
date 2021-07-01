import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class ExamAnswerService {

  constructor(private _http:Http) { }
  createAuthHeader(headers:Headers){
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    headers.append('Authorization',`Bearer ${token}`);
  }
  getExamAnswer(id:any){
    const headers = new Headers();
  this.createAuthHeader(headers);
  return this._http.get(`http://localhost:3200/examAnswer/${id}`)
    .pipe(map(resp=>resp.json()));
  }

  updateStudentGrade(studId:any,examId:any,grade:any){
    const headers = new Headers();
    this.createAuthHeader(headers);
    return this._http.patch(`http://localhost:3200/examAnswer/studenGrade/${studId}/${examId}`,grade)
      .pipe(map(resp=>resp.json()));
    
  }
}
