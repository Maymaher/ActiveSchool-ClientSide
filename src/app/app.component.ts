import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../app/services/student.service';
import { UserService } from '../app/services/user.service';
 


@Component({ 
    selector: 'app-root', 
    templateUrl: './app.component.html' ,
    styleUrls: ['./app.component.css']

})
export class AppComponent {
    
    user:any={
  "status":true,
  "date":Date(),
  "student":this._studentAuth.getCurrentUser().id
  
    }
    
   
        
status:any={
  "status":false
}


    constructor(
        public _studentService:StudentService,
        public _studentAuth:UserService,
        public router:Router,
        public http: HttpClient,
       
         ) { }
    logout() {
       
    }
    ngOnInit(): void {
      let date= new Date()
      console.log(date);
      console.log(this._studentAuth.isLoggedIn());
      console.log(date.getHours());
      console.log(date.getMinutes());
 

      if(this._studentAuth.isLoggedIn())
      {

        this.status.status=true;
        this._studentService.updateStudentLoginStatus(this._studentAuth.getCurrentUser().id,this.status).subscribe(resp =>{

        
          console.log("update");
          
        })
       
      }

      this.status.status=true;
     


      this._studentService.getAlllStudent().subscribe(resp =>{

        for(let stud of resp)
        {



    if( stud.status &&(date.getHours()==15 && date.getMinutes()==37 && date.getSeconds()==7))
        {
          this.user.student=stud._id;
          this.user.status=true;
          this._studentService.AssigenAttendence(this.user).subscribe(resp =>{

            this.user=resp;
          
      
            console.log(this.user);
            console.log("enter");
            
          })
         
    
        }
        else if(!stud.status &&(date.getHours()==15 && date.getMinutes()==37 && date.getSeconds()==7))
        {
          this.user.student=stud._id;
          this.user.status=false;
          this._studentService.AssigenAttendence(this.user).subscribe(resp =>{

            this.user=resp;
          
      
            console.log(this.user);
            console.log("nooooo");
            
            
          })
           
            
        
      
        
      }
     

        }

        
    })

    }
  
  
  }
       
        
      


    
        
        
        

    
    
