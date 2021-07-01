import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ExamAnswerService } from '../../../services/exam-answer.service';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-add-students-grades',
  templateUrl: './add-students-grades.component.html',
  styleUrls: ['./add-students-grades.component.css']
})
export class AddStudentsGradesComponent implements OnInit {

  grade:number=0.0;
  studId:any;
  examId:any;
  answers:any;
  constructor(private examAnswerService:ExamAnswerService,
    private activatedRoute:ActivatedRoute,
    private examService:ExamService,
    private flash:FlashMessagesService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getExamAnswer()
  }

  addGrade(){
    this.studId=this.activatedRoute.snapshot.paramMap.get('stud_id');
    this.examId=this.activatedRoute.snapshot.paramMap.get('exam_id');

    let grade={};
    grade={
      grade:this.grade,
     
    }
  this.examAnswerService.updateStudentGrade(this.studId,this.examId,grade).subscribe((resp: any) => {
    if (!resp.success) {
      this.flash.show(resp.message, { cssClass: 'alert-danger' });
      return false;
    }

    this.flash.show('grade updated', { cssClass: 'alert-success' });
    return this.router.navigate([`/teacher/examAnswers/${this.examId}`]);
  });

  }

  getExamAnswer(){
    this.examId=this.activatedRoute.snapshot.paramMap.get('id');
    this.examAnswerService.getExamAnswer(this.examId).subscribe(resp=>{
      this.answers=resp;
      console.log(resp);
      
    })
  }


}
