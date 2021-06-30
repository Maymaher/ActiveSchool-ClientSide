import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../../services/user.service';


@Component({ selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
 }
)
export class LoginComponent implements OnInit {

    email: string ="";
    password: string="";
    
  
    constructor(
      private _userService :UserService,
      private _flash :FlashMessagesService,
      private _router :Router
     
    ) { }

    

    ngOnInit() {
        

       
    }

   

    onLogin() {
      if(!this.email || !this.password) {
        this._flash.show('All fields are required', { cssClass: 'alert-danger'});
        
      }
      else{
        const user = {
          email: this.email,
          password: this.password
        }
        this._userService.auth(user).subscribe(data =>{
          if (!data.success) {
            this._flash.show(data.message, { cssClass: 'alert-danger'});
            
          }
          else{
            //this._flash.show(data.message, { cssClass: 'alert-success'});
            this._userService.saveUserDate(data.token,data.user)
            if(data.user.type=="admin")
            this._router.navigate(['/admin/home']);
            else if(data.user.type=="student")
            this._router.navigate(['/home']);
            else
            this._router.navigate(['/teacher/home']);

          }
        });
      }
     

    }

}