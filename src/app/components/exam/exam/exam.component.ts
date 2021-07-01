import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../../services/exam.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private _userService :UserService,private _examService :ExamService) { }
  
  exam:any={};
  examPath="http://localhost:3200/public/exams/";
  fd=new FormData();
  myfile:any=null;
  eid:any;
  uid:any; 

  ngOnInit(): void {
    this.eid = this.activatedRoute.snapshot.paramMap.get('id');
    this.uid = this._userService.getCurrentUser().id; 
    this._examService.getSpecificExam(this.eid).subscribe(data =>{
      this.exam=data;
     // this.from=this.exams.from.slice(12, 24);
      console.log(this.exam);
    })
    
  }

  getFile(event:any){
    this.myfile=<File>event.target.files[0];
    if(!this.myfile.name.match(/([a-zA-Z0-9\s_\\.\-\(\):])+(.doc|.docx|.pdf|.png|.svg|.jpg|.jpeg|.gif)$/)){
      alert("Sorry, You Can't upload This Type");
      console.log(this.myfile);
      this.myfile=null;
    }
    else{
      this.fd.append('file',this.myfile,this.myfile.name);
      console.log(this.myfile);

    }


}
UplaodExam(){
  const exam={
    
    file:this.myfile,
    

  }
  this._examService.uploadExamAnswer(this.eid,this.uid,this.exam,this.myfile).subscribe(data=>{
    console.log(data);
   })
 
}




}
