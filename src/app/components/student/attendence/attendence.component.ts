import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from '../../../services/student.service'
import {UserService} from '../../../services/user.service'


@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

  date:any=Date()
  attendence:any={
"status":true,
"date":Date(),
"student":this._studentAuth.getCurrentUser().id

  }

  constructor(
    public _studentService:StudentService,
    public _studentAuth:UserService,
    public router:Router,
    public http: HttpClient,
   
     ) { }
   

  ngOnInit(): void {

    this._studentService.getStudentAttendence(this._studentAuth.getCurrentUser().id).subscribe(resp =>{

      this.attendence=resp;
      console.log("jj"+this.attendence);
      
    })
  
 
  }

}
