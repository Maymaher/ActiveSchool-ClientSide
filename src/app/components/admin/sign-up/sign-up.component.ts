import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClassService } from '../../../services/class.service';
import { LevelService } from '../../../services/level.service';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  type: string = '';
  level: string = '';
  class: string = '';
  CurrentUser:any;
  allClassess: any;
  allLevels:any;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _flash: FlashMessagesService,
    private http: HttpClient,
    CommonModule: CommonModule,
    private _classService: ClassService,
    private _levelService:LevelService
  ) {}

  ngOnInit(): void {
    this.getAllclasses();
    this.getAllLevels();
    this.CurrentUser=this._userService.getCurrentUser();
  }

  onRegister() {
    let students = {};
    let teachers = {};

    if (
      !this.firstName ||
      !this.lastName ||
      !this.email ||
      !this.password ||
      !this.address ||
      !this.type
    ) {
      this._flash.show('All fields are required', { cssClass: 'alert-danger' });
      return false;
    }

    if (this.type == 'student') {
      students = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone:this.phone,
        email: this.email,
        password: this.password,
        address: this.address,
        type: this.type,
        level:this.level,
        class:this.class
      };
      this._userService.createAccount(students).subscribe((resp: any) => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }

        this._flash.show('Account was created', { cssClass: 'alert-success' });
        return this._router.navigate(['/admin/home']);
      });
    } else {
      teachers = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone:this.phone,
        email: this.email,
        password: this.password,
        address: this.address,
        type: this.type,
      };
      this._userService.createAccount(teachers).subscribe((resp: any) => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }

        this._flash.show('Account was created', { cssClass: 'alert-success' });
        return this._router.navigate(['/admin/home']);
      });
    }

    return true;
  }

  getAllclasses() {
    this._classService.getclasses().subscribe(
      resp=>{
        console.log(resp);
        this.allClassess=resp;
        console.log(this.allClassess);
        
      }
    )
  }

  getAllLevels() {
    this._levelService.getlevels().subscribe(
      resp=>{
        console.log(resp);
        this.allLevels=resp;
        console.log(this.allLevels);
        
      }
    )
  }










}
