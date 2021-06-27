import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CourseService } from 'src/app/services/course.service';
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
  courseId:any;
  unassignedCourses:any;
  tcourse:string="";
  teachercourse:any;

  constructor( private _router: Router,
    private activatedRoute:ActivatedRoute, 
    private teacherService:TeacherService ,
    private courseService:CourseService,
    private _flash:FlashMessagesService
    ) { 
    
  }

  ngOnInit(): void {
    this.getTeacherDetails();
    this.getTeacherCourses();
    this.getTeacherlevels()
    this.deleteTeacherCourse()
    this.getUnassignedCourses()
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
      console.log(resp);
      console.log(this.teacherCourses);
    })
    
    
  }


  getTeacherlevels(){
    this.teacherId=this.activatedRoute.snapshot.paramMap.get('id');
    this.teacherService.getTeacherLevels(this.teacherId).subscribe(resp=>{
      this.teacherLevels=resp;
      // console.log(resp);
      // console.log(this.teacherLevels);
    })
    
    
  }

  getUnassignedCourses(){
    this.teacherId=this.activatedRoute.snapshot.paramMap.get('id');
    this.courseService.getUnassignedCourses(this.teacherId).subscribe(resp=>{
      this.unassignedCourses=resp;
      // console.log(resp);
      // console.log(this.unassignedCourses);
    })
    
    
  }

  deleteTeacherCourse(){
    this.teacherId=this.activatedRoute.snapshot.paramMap.get('id');
    this.courseId=this.activatedRoute.snapshot.paramMap.get('courseId');

    this.teacherService.deleteTeacherCourse(this.teacherId,this.courseId).subscribe(resp=>{
      // this.teacherLevels=resp;
      console.log(resp);
      // console.log(this.teacherLevels);
    })
    return this._router.navigate([`/admin/teacherDetails/${this.teacherId}`]);
    
    
  }
  

  addNewCourse(){
    // location.reload(); 
    this.teachercourse={
      course:this.tcourse
    }
    this.teacherId=this.activatedRoute.snapshot.paramMap.get('id');

    this.courseService.assignCourseToTeacher(this.teacherId,this.teachercourse).subscribe(resp => {
      if (!resp.success) {
        this._flash.show(resp.message, { cssClass: 'alert-danger' });
        return false;
      }

      this._flash.show('course added', { cssClass: 'alert-success' });
      return this._router.navigate([`/admin/teacherDetails/${this.teacherId}`]);
            // return true;
    });
   
    // return true;
  }

}
