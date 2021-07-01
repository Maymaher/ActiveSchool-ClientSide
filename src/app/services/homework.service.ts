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
export class HomeworkService {

  constructor(private _http:Http) { }

//Upload homework file
upload(id:any,homework:any,file:File)
  {
    const formData:FormData = new FormData();
    formData.append('file',file)
    

    console.log(formData);
   
      return this._http.post('http://localhost:3200/homeworkUpload/'+id, formData)
      .pipe(map((resp:any)=> resp.json()));
      
    
    


  }

  //upload homework answer
  uploadHomeworkAnswer(id:any,homework_answer:any,file:File)
  {
    const formData:FormData = new FormData();
    formData.append('file',file);
    formData.append('student',homework_answer.student);
    

    console.log(formData);
   
      return this._http.post('http://localhost:3200/homeworkAnswerUpload'+id, formData)
      .pipe(map((resp:any)=> resp.json()));
      
    
    


  }



}
