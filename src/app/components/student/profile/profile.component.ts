import { Component, OnInit ,Input ,NgZone} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { StudentService } from '../../../services/student.service';
import { Observable } from 'rxjs';

 import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    public authService: StudentService,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit(): void {
  }

}
