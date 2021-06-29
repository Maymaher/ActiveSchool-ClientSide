import { Component, OnInit ,Input ,NgZone} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { StudentService } from '../../../services/student.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

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
    

      console.log(this.user);
      
    })
  
  } 

}
