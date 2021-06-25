import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  teacherId:any;
  teacherDetails:any
  teacherCourses:any;
  teacherLevels:any;

  constructor(private activatedRoute:ActivatedRoute, private teacherService:TeacherService ) { 
    
  }

  ngOnInit(): void {
    this.getTeacherDetails();
    this.getTeacherCourses();
    this.getTeacherlevels()
  }

  getTeacherDetails(){
    this.teacherId=this.activatedRoute.snapshot.paramMap.get('id');
    this.teacherService.getTeacherById(this.teacherId).subscribe(resp=>{
      this.teacherDetails=resp;
    })
  }

  getTeacherCourses(){
    this.teacherId=this.activatedRoute.snapshot.paramMap.get('id');
    this.teacherService.getTeacherCourse(this.teacherId).subscribe(resp=>{
      this.teacherCourses=resp;
      // console.log(resp);
      // console.log(this.teacherCourses);
    })
    
    
  }


  getTeacherlevels(){
    this.teacherId=this.activatedRoute.snapshot.paramMap.get('id');
    this.teacherService.getTeacherLevels(this.teacherId).subscribe(resp=>{
      this.teacherLevels=resp;
      console.log(resp);
      console.log(this.teacherLevels);
    })
    
    
  }

}
