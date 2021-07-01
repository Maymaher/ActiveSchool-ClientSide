import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   public user:any=[{

    
   }]
  constructor(
    public authService: StudentService,
    public router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    this.authService.profileInfo(this.authService.getCurrentUser().id).subscribe(resp =>{

      this.user=resp;
    

      console.log("useerr"+this.user);
      
    })
  
  } 

}
