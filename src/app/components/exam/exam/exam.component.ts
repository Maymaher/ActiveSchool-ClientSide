import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ExamService } from '../../../services/exam.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private _userService :UserService,private _examService :ExamService,private _flash :FlashMessagesService) { }
  
  exam:any={};
  examPath="http://localhost:3200/public/exams/";
  fd=new FormData();
  myfile:any=null;
  eid:any;
  uid:any;
  now= new Date().toISOString()
  ExamNow=false;
  from="";
  to="";
  date="";

  ngOnInit(): void {
    this.eid = this.activatedRoute.snapshot.paramMap.get('id');
    this.uid = this._userService.getCurrentUser().id;
    

    this._examService.getSpecificExam(this.eid).subscribe(data =>{
      this.exam=data;
      this.from=this.exam.from;
      this.from=this.from.substring(11,22);
      this.to=this.exam.to;
      this.to=this.to.substring(11,22);
      this.date=this.exam.date;
      this.date=this.date.substring(0,10);
      
      if(this.now <= this.exam.to && this.now >= this.exam.from)
      {
        this.ExamNow=true;
        console.log(this.ExamNow)
      }
      else
      {
        console.log(Date.parse(this.exam.from))
        console.log(Date.parse(this.exam.to))
        console.log(this.now)
        
        console.log(this.ExamNow)
      }

  
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
  this._examService.uploadExamAnswer(this.eid,this.uid,exam,this.myfile).subscribe(data=>{
    // console.log(data.success);
    this._flash.show(data.message, { cssClass: 'alert-success'});
    // alert(data.message);
   })
 
}




}
