import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../../services/homework.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MaterialService } from '../../../services/material.service';
import {StudentService} from '../../../services/student.service';
import {ExamService} from '../../../services/exam.service';
 


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  fd=new FormData();
  myfile:any=null;
  cid:any="";
  CurrentUser:any="";
  myfileMaterial:any=null;
  fdMaterial=new FormData();
  course:any;
  materials:any=[{}]
  materialFiles:any=[];
  materialPath="http://localhost:3200/public/materials/";
  homeworkPath="http://localhost:3200/public/homeworks/";
  examsPath="http://localhost:3200/public/exams/";
  Homeworks:any=[];
  Exam:any=[];
  exam:any;
  currentDate:any;
  examPath="http://localhost:3200/public/materials/";

  

  constructor(private _ExamService:ExamService,private _homeworkService :HomeworkService,private activatedRoute: ActivatedRoute,private _userService :UserService,private _flash :FlashMessagesService,private _materialService :MaterialService
    ,public _studentService:StudentService
    ) { 
    
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


  getFileMaterial(event:any){
    this.myfileMaterial=<File>event.target.files[0];
    if(!this.myfileMaterial.name.match(/([a-zA-Z0-9\s_\\.\-\(\):])+(.doc|.docx|.pdf|.png|.svg|.jpg|.jpeg|.gif)$/)){
      alert("Sorry, You Can't upload This Type");
      console.log(this.myfileMaterial);
      this.myfileMaterial=null;
    }
    else{
      this.fdMaterial.append('file',this.myfileMaterial,this.myfileMaterial.name);
      console.log(this.myfileMaterial);

    }
  }

  ngOnInit(): void {
    this.currentDate=new Date().toISOString()
    this.cid = this.activatedRoute.snapshot.paramMap.get('id');
    this.CurrentUser=this._userService.getCurrentUser();

    this._studentService.getCoursesInfo(this.cid).subscribe(resp =>{

      this.course=resp;
    

      console.log(this.course);
     })

     this._materialService.getmaterial(this.cid).subscribe(resp =>{

      
      this.materials=resp;
      console.log("my",resp);
      for(let mat of  this.materials)
      this._materialService.getmaterialfiles(mat._id).subscribe(resp =>{
      
        this.materialFiles.push(resp[0].materialFile);
        console.log("myll",this.materialFiles);
        
       })
      
     })
      
     this._homeworkService.getAllHomework(this.cid).subscribe(resp =>{

      this.Homeworks=resp;
    

      console.log("home",this.Homeworks);
     })

     this._ExamService.getCourseExams(this.cid).subscribe(resp=>{


this.Exam=resp;
console.log("exams",this.Exam);
for(let e of this.Exam)
{
  if(e.from<=this.currentDate  && e.to >= this.currentDate)
  {
    this.exam=e;
  }
}

     })
      
  }

  UplaodHomework(){
     if(this.myfile==null)
    {
      alert("Please, Enter a valid file")
    }
    else{
      const homework={
        file:this.myfile,
        
      }
      this._homeworkService.upload(this.cid,homework,this.myfile).subscribe(data=>{
        this._flash.show(data.message, { cssClass: 'alert-success'});
      })
     
      
  
    }
  }


  UplaodMaterial(){
    if(this.myfileMaterial==null)
    {
      alert("Please, Enter a valid file")
    }
    else{
      const material={
        file:this.myfileMaterial,
        teacher:this.CurrentUser.id
        
      }
      this._materialService.upload(this.cid,material,this.myfileMaterial).subscribe(data=>{
        this._flash.show(data.message, { cssClass: 'alert-success'});
      })
     
      
  
    }

  }

}
