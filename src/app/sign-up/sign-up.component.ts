import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
  
import { Router } from "@angular/router";
 import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name: string="";
  email: string="";
  password: string="";
  address:String="";
  


  constructor(
 
    private _userService: UserService,
    private _router:Router,
    private _flash:FlashMessagesService,
   private http: HttpClient, 
  ) {

  
  }


  ngOnInit(): void {
  }



 onRegister() {


    if (!this.name || !this.email || !this.password || !this.address) {
      this._flash.show('All fields are required', { cssClass: 'alert-danger' });
      return false;
    }
    

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      address:this.address,
    }

    this._userService.createAccount(user).subscribe((resp:any) => {
        if(!resp.success) {
          this._flash.show(resp.message, { cssClass: 'alert-danger' } );
          return false;
        }

        this._flash.show('Account was created', { cssClass: 'alert-success' } );
        return this._router.navigate(['']);
      }
    );
    return true;
  }


}
