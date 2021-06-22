// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { SignUpComponent } from './sign-up/sign-up.component';

 
// used to create fake backend

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        BrowserModule, 
        FlashMessagesModule.forRoot(),
        BrowserModule,
        HttpClientModule,
        HttpModule,
        
    
        FormsModule,
     
    
    ],
    
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        SignUpComponent
    ],
    providers: [
        UserService ,
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }