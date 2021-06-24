import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from '../../../services/student.service'
import {ProfileComponent} from '../profile/profile.component'
@Component({
  selector: 'app-schedular',
  templateUrl: './schedular.component.html',
  styleUrls: ['./schedular.component.css']
})
export class SchedularComponent implements OnInit {

  public scheular:any=[{}]
  public sturdaySchedual:any
  public sundaySchedual:any
  public mondaySchedual:any
  public tusdaySchedual:any
  public wensdaySchedual:any
  public thrisdaySchedual:any
  

  public user:any=[{

    
  }]
  constructor(
 public _studentService:StudentService,
 public router:Router,
 public http: HttpClient,

  ) { }

  ngOnInit(): void {
    this._studentService.profileInfo(this._studentService.getCurrentUser().id).subscribe(resp =>{

      this.user=resp;
    

      console.log(this.user);
      
    })
  
 
    this._studentService.getStudentSchedular("60cc727f770c4c17cae8a420").subscribe(resp =>{

      this.scheular=resp;
    

      
  

     console.log(this.scheular[0]._id);
     this._studentService.getStudentSturdaySchedular(this.scheular[0]._id).subscribe(resp =>{

      this.sturdaySchedual=resp;
    

      console.log(this.sturdaySchedual);
     })

    
     this._studentService.getStudentSundaySchedular(this.scheular[0]._id).subscribe(resp =>{

      this.sundaySchedual=resp;
    

      console.log(this.sundaySchedual);
     })

     this._studentService.getStudentMondaySchedular(this.scheular[0]._id).subscribe(resp =>{

      this.mondaySchedual=resp;
    

      console.log(this.mondaySchedual);
     })

     this._studentService.getStudentTusdaySchedular(this.scheular[0]._id).subscribe(resp =>{

      this.tusdaySchedual=resp;
    

      console.log(this.tusdaySchedual);
     })

     this._studentService.getStudentWensdaySchedular(this.scheular[0]._id).subscribe(resp =>{

      this.wensdaySchedual=resp;
    

      console.log(this.wensdaySchedual);
     })

     this._studentService.getStudentThrisdaySchedular(this.scheular[0]._id).subscribe(resp =>{

      this.thrisdaySchedual=resp;
    

      console.log(this.thrisdaySchedual);
     })

    })


  
  
}
}

