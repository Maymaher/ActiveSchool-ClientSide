import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClassService } from '../../../services/class.service';
import { LevelService } from '../../../services/level.service';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  type: string = '';
  level: string = '';
  class: string = '';
  userId:any;

  allClassess: any;
  allLevels:any;

  userData:any;
  constructor( private _userService: UserService,
    private _router: Router,
    private _flash: FlashMessagesService,
    private http: HttpClient,
    private _classService: ClassService,
    private _levelService:LevelService,
    private activatedRoute:ActivatedRoute, ) { }

  ngOnInit(): void {
    this.getUserData()
    this.getAllLevels();
    this.getAllclasses()
  }
  onUpdate(){
    this.userId=this.activatedRoute.snapshot.paramMap.get('id');

    let student = {};
    let teacher = {};

    // if (
    //   !this.firstName ||
    //   !this.lastName ||
    //   !this.email ||
    //   !this.password ||
    //   !this.address ||
    //   !this.type
    // ) {
    //   this._flash.show('All fields are required', { cssClass: 'alert-danger' });
    //   return false;
    // }

    if (this.userData.type == 'student') {
      student = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone:this.phone,
        email: this.email,
        password: this.password,
        address: this.address,
        level:this.level,
        class:this.class
      };

      this._userService.updateUser(this.userId,student).subscribe((resp: any) => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }

        this._flash.show('user updated', { cssClass: 'alert-success' });
        return this._router.navigate(['/admin/home']);
      });
    } else {
      teacher = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone:this.phone,
        email: this.email,
        password: this.password,
        address: this.address,
      };
      this._userService.updateUser(this.userId,teacher).subscribe((resp: any) => {
        if (!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' });
          return false;
        }

        this._flash.show('user updated', { cssClass: 'alert-success' });
        return this._router.navigate(['/admin/home']);
      });
    }

    return true;
  }


  getUserData(){
    this.userId=this.activatedRoute.snapshot.paramMap.get('id');
    this._userService.getUserById(this.userId).subscribe(
      resp=>{
        console.log(resp);
        this.userData=resp;
        // console.log(this.allClassess);
        
      }
    )

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
