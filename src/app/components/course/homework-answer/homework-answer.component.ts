import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HomeworkService } from '../../../services/homework.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homework-answer',
  templateUrl: './homework-answer.component.html',
  styleUrls: ['./homework-answer.component.css']
})
export class HomeworkAnswerComponent implements OnInit {
  fd=new FormData();
  myfile:any=null;
  hid:any="";
  CurrentUser:any="";


  constructor(private _homeworkService :HomeworkService,private activatedRoute: ActivatedRoute,private _userService :UserService,private _flash :FlashMessagesService) { }

  ngOnInit(): void {
    this.hid = this.activatedRoute.snapshot.paramMap.get('id');
    this.CurrentUser=this._userService.getCurrentUser();
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

  UplaodHomeworkAnswer()
  {
    if(this.myfile==null)
    {
      alert("Please, Enter a valid file")
    }
    else{
      const answer={
        file:this.myfile,
        student:this.CurrentUser.id
        
      }
      this._homeworkService.uploadHomeworkAnswer(this.hid,answer,this.myfile).subscribe(data=>{
        this._flash.show(data.message, { cssClass: 'alert-success'});
      })
     
      
  
    }

  }

}
