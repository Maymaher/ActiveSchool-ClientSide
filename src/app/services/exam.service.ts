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
export class ExamService {

  constructor(private _http:Http) { }

  //Get Exams of teacher
  getExams(id:any)
  {
    return this._http.get('http://localhost:3200/exam/'+id)
      .pipe(map((resp:any)=> resp.json()));
  }

  //Get Specific exam
  getSpecificExam(id:any)
  {
    return this._http.get('http://localhost:3200/exam/'+id+'/specificExam')
      .pipe(map((resp:any)=> resp.json()));

  }

  uploadExamAnswer(id:any,answer:any,file:File)
  {
    const formData:FormData = new FormData();
    formData.append('file',file)
    return this._http.post('http://localhost:3200/examAnswerUpload/'+id,formData);
      
  }

}
