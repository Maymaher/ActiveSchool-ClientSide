import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:any;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCourses()
  }
  getCourses(){
    this.courseService.getAllCourses().subscribe(
      resp=>{
        this.courses=resp;
        console.log(resp);
        
      }
    )
  }

}
