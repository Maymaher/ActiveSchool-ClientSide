import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { StudentService } from '../../../services/student.service';
// import { AttendenceComponent } from '../attendence/attendence.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   public user:any=[{

    
   }]

   userData:any
  constructor(
    public authService: StudentService,
    public router: Router,
    private http: HttpClient,
    private _userService:UserService
    // private AttendenceComponent:AttendenceComponent
  ) { }

  ngOnInit(): void {
    this.user=this._userService.getCurrentUser();
    console.log(    this._userService.getCurrentUser()
    );


    this.authService.profileInfo(this.user.id).subscribe(resp =>{

      this.userData=resp;
    

      console.log("useerr",this.userData);
      
    })
  
  } 

}
