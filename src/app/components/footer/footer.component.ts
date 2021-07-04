import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentuser:any
  constructor(public _userService :UserService,
    public _router :Router) { }

  ngOnInit(): void {
    this.currentuser=this._userService.getCurrentUser();
    console.log(    this._userService.getCurrentUser()
    );
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
  }

}
