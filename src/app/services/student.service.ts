import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import * as AppUtil from '../common/app.util';

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
  createAuthHeader(headers:Headers){
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
    headers.append('Authorization',`Bearer ${token}`);
  }

  getstudents(){
  
  const headers = new Headers();
  this.createAuthHeader(headers);
  return this._http.get('http://localhost:3200/student/student',{headers})
    .pipe(map(resp=>resp.json()));
  }




  getCurrentUser() {
    return JSON.parse(localStorage.getItem(AppUtil.USER_INFO) || '{}');
  }
  
 
  profileInfo(id:any) {
    // console.log(this.getCurrentUser().id);
    // let id="60d23125b268c730beff34b7";
    return this._http.get('http://localhost:3200/student/ProfileInfo/'+id).pipe(map((resp:any)=>resp.json()))

  
  }

  getStudentSchedular(id:any){

    return this._http.get('http://localhost:3200/student/schedual/'+id).pipe(map((resp:any)=>resp.json()))

  }

  getStudentSturdaySchedular(id:any){

    return this._http.get('http://localhost:3200/student/schedual/sturday/'+id).pipe(map((resp:any)=>resp.json()))

  }

  getStudentSundaySchedular(id:any){

    return this._http.get('http://localhost:3200/student/schedual/sunday/'+id).pipe(map((resp:any)=>resp.json()))

  }
  getStudentMondaySchedular(id:any){

    return this._http.get('http://localhost:3200/student/schedual/monday/'+id).pipe(map((resp:any)=>resp.json()))

  }

  getStudentTusdaySchedular(id:any){

    return this._http.get('http://localhost:3200/student/schedual/tusday/'+id).pipe(map((resp:any)=>resp.json()))

  }
  getStudentWensdaySchedular(id:any){

    return this._http.get('http://localhost:3200/student/schedual/wensday/'+id).pipe(map((resp:any)=>resp.json()))

  }

  getStudentThrisdaySchedular(id:any){

    return this._http.get('http://localhost:3200/student/schedual/thrisday/'+id).pipe(map((resp:any)=>resp.json()))

  }



  AssigenAttendence(user:any) {
   console.log("enter");
   
    return this._http.post('http://localhost:3200/student/attendence', user).pipe(map((resp:any) => resp.json()));
  }
 

  getStudentAttendence(id:any){

    return this._http.get('http://localhost:3200/student/attendence/'+id).pipe(map((resp:any)=>resp.json()))

  }



  updateStudentLoginStatus(id:any,status:any)
  {
    return this._http.patch(`http://localhost:3200/student/studenStatuse/${id}`,status).pipe(map((resp:any)=>resp.json()))

    
   
  }


  getAlllStudent(){

    return this._http.get('http://localhost:3200/student/student').pipe(map((resp:any)=>resp.json()))

  }

  getlevelCourcese(id:any){

    return this._http.get('http://localhost:3200/student/courses/'+id).pipe(map((resp:any)=>resp.json()))

  }

getAllGrates(id:any) 
{


  return this._http.get('http://localhost:3200/student/grade/'+id).pipe(map((resp:any)=>resp.json()))

}

getCoursesInfo(id:any) 
{


  return this._http.get('http://localhost:3200/student/coursesInfo/'+id).pipe(map((resp:any)=>resp.json()))

}




}
