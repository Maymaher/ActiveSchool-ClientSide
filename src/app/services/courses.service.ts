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
export class CoursesService {

  constructor(private _http:Http) { }

  //Get Courses of specific teacher
  getCourses(id:any)
  {
        this._http.get('http://localhost:3200/teacher/'+id+'/levels').pipe(map((resp:any) => resp.json()));
  }
}
