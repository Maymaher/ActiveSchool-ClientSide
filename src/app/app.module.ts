// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';



// used to create fake backend

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        FlashMessagesModule.forRoot(),
        HttpModule,
        RouterModule,
        
       
    
    
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
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }