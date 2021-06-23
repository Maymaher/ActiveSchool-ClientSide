// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/student/profile/profile.component';
 


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
        HttpModule,
        FormsModule, 
    
    
    ],
    
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        SignUpComponent,
        ProfileComponent,
       
    ],
    providers: [
        UserService ,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }