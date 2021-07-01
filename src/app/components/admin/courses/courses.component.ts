import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CourseService } from '../../../services/course.service';
import { LevelService } from '../../../services/level.service';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  name:string="";
  description:string="";
  level:string=""

  courses:any;
  levels:any;
  CurrentUser:any;

  constructor(private courseService:CourseService,
    private _flash:FlashMessagesService,
    private _router :Router,
    private levelService:LevelService,
    private _userService:UserService
    ) { }

  ngOnInit(): void {
    this.getCourses()
    this.getLevels()
    this.CurrentUser=this._userService.getCurrentUser();

  }
  getCourses(){
    this.courseService.getAllCourses().subscribe(
      resp=>{
        this.courses=resp;
        console.log(resp);
        
      }
    )
  }

  deleteCourse(id:any){
    this.courseService.deleteCourse(id).subscribe(
      resp=>{
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }
     
      this._flash.show("course deleted", { cssClass: 'alert-success' });
  
       return  this._router.navigate(['/admin/home']);
      }
      
    )
  }

  updateCourse(id:any){
    let students = {};
    // let teachers = {};

    if (
      
      !this.name
    ) {
      this._flash.show('All fields are required', { cssClass: 'alert-danger' });
      return false;
    }

   
      students = {
        
        name:this.name,
        
      };
      this.courseService.updateCourse(id,students).subscribe((resp: any) => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }

        this._flash.show('Account was created', { cssClass: 'alert-success' });
        return this._router.navigate(['/admin/home']);
      });
    return true;
    
  }

  getLevels(){
    this.levelService.getlevels().subscribe(
      resp=>{
        this.levels=resp;
        console.log(resp);
        
      }
    )
  }

  addCourse(){
    let course = {};
    // let teachers = {};

    if (!this.name ||!this.description|| !this.level) {
      this._flash.show('All fields are required', { cssClass: 'alert-danger' });
      return false;
    }

   
    course = {
        
        name:this.name,
        description:this.description,
        level:this.level
        
      };
      this.courseService.addCourse(course).subscribe(resp => {
       
        
        if (!resp.success) {

        this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }
        this._flash.show('course was created', { cssClass: 'alert-success' });

        return true;
        // return this._router.navigate(['/admin/courses']);
      });
    return true;
  }

}
