import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-exam-teacher',
  templateUrl: './exam-teacher.component.html',
  styleUrls: ['./exam-teacher.component.css']
})
export class ExamTeacherComponent implements OnInit {

  authorized_user=false;
  teacher:any={};
  exams:any=[];
  date="";
  from="";
  to="";
  examPath="http://localhost:3200/public/exams/";
  constructor(private activatedRoute: ActivatedRoute,private _userService :UserService,private _examService :ExamService) { }

  ngOnInit(): void {
    let uid = this.activatedRoute.snapshot.paramMap.get('id');
      let CurrentUser=this._userService.getCurrentUser();
     if(CurrentUser.id == uid)
     {
      this.authorized_user=true;
      this._userService.getteacher(uid).subscribe(data =>{
        this.teacher=data;
        
        console.log(this.teacher);
      })
      this._examService.getExams(uid).subscribe(data =>{
        this.exams=data;
       // this.from=this.exams.from.slice(12, 24);
        console.log(this.exams);
      })
      
      



     
  }

  }}
