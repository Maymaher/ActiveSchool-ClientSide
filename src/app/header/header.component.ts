import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  books: any;
  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit() {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // let httpOptions = {
      
    //   // headers: new HttpHeaders({ "Authorization": localStorage.getItem('jwtToken') })
    // };
    // this.http.get('/student/student', options).subscribe(data => {
    //   this.books = data;
    //   console.log(this.books);
    // }, err => {
    //   if(err.status === 401) {
    //     this.router.navigate(['login']);
    //   }
    // });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}
