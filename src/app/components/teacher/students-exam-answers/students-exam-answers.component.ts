import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamAnswerService } from '../../../services/exam-answer.service';
import { ExamService } from '../../../services/exam.service';
@Component({
  selector: 'app-students-exam-answers',
  templateUrl: './students-exam-answers.component.html',
  styleUrls: ['./students-exam-answers.component.css']
})
export class StudentsExamAnswersComponent implements OnInit {

  constructor(private examAnswerService:ExamAnswerService,
    private activatedRoute:ActivatedRoute,
    private examService:ExamService
    ) { }

  answers:any;
  examId:any;
  exam:any;
  examPath="http://localhost:3200/public/exams/";
  
  ngOnInit(): void {
    this.getExamAnswer()
    this.getExam()
  }

  getExamAnswer(){
    this.examId=this.activatedRoute.snapshot.paramMap.get('id');
    this.examAnswerService.getExamAnswer(this.examId).subscribe(resp=>{
      this.answers=resp;
      console.log("answeer"+this.answers);
      
    })
  }

  getExam(){
    this.examId=this.activatedRoute.snapshot.paramMap.get('id');
    this.examService.getSpecificExam(this.examId).subscribe(resp=>{
      this.exam=resp;
      // console.log(resp);
      
    })

  }

}
