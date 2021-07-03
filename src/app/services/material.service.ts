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
export class MaterialService {

  constructor(private _http:Http) { }

  //Upload material file
upload(id:any,material:any,file:File)
{
  const formData:FormData = new FormData();
  formData.append('file',file)
  formData.append('teacher',material.teacher)
  

  console.log(formData);
 
    return this._http.post('http://localhost:3200/materialUpload/'+id, formData)
    .pipe(map((resp:any)=> resp.json()));
    
  
  


}

getmaterial(id:any) 
{


  return this._http.get('http://localhost:3200/material/material/'+id).pipe(map((resp:any)=>resp.json()))

}

getmaterialfiles(id:any) 
{


  return this._http.get('http://localhost:3200/material/materialfiles/'+id).pipe(map((resp:any)=>resp.json()))

}


}
