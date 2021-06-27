import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeAdminComponent implements OnInit {
   student:boolean=true;
   teacher:boolean=false;

   teachersData:any;
   studentsData:any;




  constructor( private _router :Router,CommonModule:CommonModule,
    private _teacherService: TeacherService,
    private _studentService:StudentService,
    private _userService:UserService,
    private _flash:FlashMessagesService
    ) {
   this.student=true;
   this.teacher=false;

   }

  ngOnInit(): void {
    
    
   this.getStudentsData()
   this.getTeacherData()

  }

  getTeacherData(){
    this._teacherService.getTeachers().subscribe(
      resp=>{
        this.teachersData=resp;
      }
    )
  }

  getStudentsData(){
    this._studentService.getstudents().subscribe(
      resp=>{
        // console.log(resp);
        this.studentsData=resp;
        console.log(this.studentsData);
        
      }
    )
  }

//   btnClick () {
//     this._router.navigateByUrl('/register');
// };

deleteUser(user_id:any){
  this._userService.deleteUser(user_id).subscribe(
    resp=>{
      if (!resp.success) {
        this._flash.show(resp.message, { cssClass: 'alert-danger' });
        return false;
      }
   
        this._flash.show("user deleted", { cssClass: 'alert-success' });

     return  this._router.navigate(['/admin/home']);
    }
  )
}

getStudent(){
  this.student=true;
  this.teacher=false;

}

getTeacher(){
  this.student=false;
  this.teacher=true;
  console.log("in function student"+this.student,this.teacher)


}
}
