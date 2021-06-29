import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentuser:any;
  constructor( public _userService :UserService,
    public _router :Router) { 
    
  }
  
  ngOnInit() {
    this.currentuser=this._userService.getCurrentUser();
    console.log(    this._userService.getCurrentUser()
    );
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
  
  }

  onLogOutClicked(){
    this._userService.logOut();
    this._router.navigate(['/login']);
    // return false;
  }

}
