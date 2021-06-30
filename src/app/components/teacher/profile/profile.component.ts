import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  opened=false;
  teacher:any={};
  courses:any=[];
  authorized_user=false;
  profile_picture="http://localhost:3200/public/images/ProfilePictures/";
  examPagePath="";
 
  birthday: string="";
  fd=new FormData();
  myfile:any=null;
  course="";
  date="";
  start="";
  end="";
  
  constructor(private _userService :UserService,private activatedRoute: ActivatedRoute, private _flash :FlashMessagesService,private _courseService :CoursesService) {
    
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
  
  

  ngOnInit(): void {
      let uid = this.activatedRoute.snapshot.paramMap.get('id');
      let CurrentUser=this._userService.getCurrentUser();
      
     if(CurrentUser.id == uid)
     {
      this.authorized_user=true;
      this.examPagePath="/teacher/"+uid+"/exams";
      this._userService.getteacher(uid).subscribe(data =>{
        this.teacher=data;
        
        console.log(data);
      })

      this._userService.getCoursesOfTeacher(uid).subscribe(data=>{
        this.courses=data;
        console.log(this.courses);
      })
      

     
       
     }

    
     
      
    
                    
  }

  toggleSidebar(){
    this.opened=!this.opened;
  }

  UplaodExam(){
    if(!this.course || !this.date || !this.start || !this.end){
      alert("Please fill the fields")

    }
    else if(this.myfile==null)
    {
      alert("Please, Enter a valid file")
    }
    
    else{
      const exam={
        course:this.course,
        date:this.date,
        from:this.date+"T"+this.start,
        to:this.date+"T"+this.end,
        file:this.myfile,
        teacher:this.teacher._id,

      }
      this._userService.upload(exam,this.myfile).subscribe(data=>{
       console.log(data);
      })
      
  
    }
   
  }
  


  
  // getTeacher(id:any)
  // {
  //   this.teacher=this._userService.getTeacher(id);
  //   console.log(this.teacher);
  // }

}
