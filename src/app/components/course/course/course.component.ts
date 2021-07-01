import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../../../services/homework.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  constructor(private _homeworkService :HomeworkService,private activatedRoute: ActivatedRoute,private _userService :UserService,private _flash :FlashMessagesService,) { 
    
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
    this.cid = this.activatedRoute.snapshot.paramMap.get('id');
    this.CurrentUser=this._userService.getCurrentUser();
      
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

  }

}
