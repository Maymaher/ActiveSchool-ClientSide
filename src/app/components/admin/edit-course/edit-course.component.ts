import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CourseService } from 'src/app/services/course.service';
import { ClassService } from '../../../services/class.service';
import { LevelService } from '../../../services/level.service';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  name:string="";
  description:string="";
  level:string="";
  allLevels:any;
  courseDetails:any;
  courseId:any;
  constructor( private _userService: UserService,
    private _router: Router,
    private _flash: FlashMessagesService,
    private http: HttpClient,
    private _classService: ClassService,
    private _levelService:LevelService,
    private courseService:CourseService,
    private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.getAllLevels()
    this.getCourseDetail()
  }



  updateCourse(){
    this.courseId=this.activatedRoute.snapshot.paramMap.get('id');
    let course={};
    course={
      name:this.name,
      description:this.description,
      level:this.level
    }
  this.courseService.updateCourse(this.courseId,course).subscribe((resp: any) => {
    if (!resp.success) {
      this._flash.show(resp.message, { cssClass: 'alert-danger' });
      return false;
    }

    this._flash.show('course updated', { cssClass: 'alert-success' });
    return this._router.navigate(['/admin/courses']);
  });

  }
  getAllLevels() {
    this._levelService.getlevels().subscribe(
      resp=>{
        console.log(resp);
        this.allLevels=resp;
        console.log(this.allLevels);
        
      }
    )
  }

  getCourseDetail(){
    this.courseId=this.activatedRoute.snapshot.paramMap.get('id');

    this.courseService.getCourse(this.courseId).subscribe(
      resp=>{
        console.log(resp);
        this.courseDetails=resp;
        // console.log(this.allLevels);
        
      }
    )
  }

  

}
