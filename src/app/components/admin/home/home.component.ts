import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeAdminComponent implements OnInit {
   student:boolean=true;
   teacher:boolean=false;


  constructor( private _router :Router,CommonModule:CommonModule) {
   this.student=true;
   this.teacher=false;

   }

  ngOnInit(): void {
    console.log("s:"+this.student)

  }
  btnClick () {
    this._router.navigateByUrl('/register');
};

getStudentData(){
  this.student=true;
  this.teacher=false;
  console.log("in function student"+this.student,this.teacher)

}

getTeacherData(){
  this.student=false;
  this.teacher=true;
  console.log("in function student"+this.student,this.teacher)


}
}
