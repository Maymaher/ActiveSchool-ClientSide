import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentService } from '../../../services/student.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  public scheular:any=[{}]
  public sturdaySchedual:any
  public sundaySchedual:any
  public mondaySchedual:any
  public tusdaySchedual:any
  public wensdaySchedual:any
  public thrisdaySchedual:any
 public day=new Date().getDay().toLocaleString();


  public user:any=[{

    
  }]
  public courses:any={

    
  }
  constructor(
    public _studentService: StudentService,
    public router: Router,
    private http: HttpClient,
    public authService:UserService
  ) { }
  ngOnInit(): void {
    console.log("current day "+this.day);
    
  
    this._studentService.getStudentSchedular(this._studentService.getCurrentUser().class).subscribe(resp =>{

      this.scheular=resp;
    

      
  

     console.log("schedual",this.scheular[0]._id);
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

console.log("go  "+this.authService.getCurrentUser().level);

    this._studentService.getlevelCourcese(this.authService.getCurrentUser().level).subscribe(resp =>{

      this.courses=resp;
    

      console.log(this.courses);
      
    })
  
}
  }





