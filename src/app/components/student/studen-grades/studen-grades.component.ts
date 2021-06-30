import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { StudentService } from '../../../services/student.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-studen-grades',
  templateUrl: './studen-grades.component.html',
  styleUrls: ['./studen-grades.component.css']
})
export class StudenGradesComponent implements OnInit {

  grades:any=[{}]
  constructor(
    public authService: StudentService,
    public router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.authService.getAllGrates("60dbc7bb931cfd6e84cb72fe").subscribe(resp =>{

      this.grades=resp;      
      console.log(this.grades);
      
    })
  
  }

}
