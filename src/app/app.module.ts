// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {SidebarModule} from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/admin/courses/courses.component';
import { EditCourseComponent } from './components/admin/edit-course/edit-course.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { HomeAdminComponent } from './components/admin/home/home.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { TeacherDetailsComponent } from './components/admin/teacher-details/teacher-details.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AttendenceComponent } from './components/student/attendence/attendence.component';
import { ProfileComponent } from './components/student/profile/profile.component';
import {ProfileTeacherComponent} from './components/teacher/profile/profile.component';
import { SchedularComponent } from './components/student/schedular/schedular.component';
import { AuthGuard } from './guards/auth.guard';
import { ClassService } from './services/class.service';
import { CourseService } from './services/course.service';
import { LevelService } from './services/level.service';
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';
import { UserService } from './services/user.service';
import { ExamTeacherComponent } from './components/teacher/exam-teacher/exam-teacher.component';
import { ExamComponent } from './components/exam/exam/exam.component';
import { StudenthomeComponent } from './components/student/studenthome/studenthome.component';
import { HomeworkService } from './services/homework.service';
 


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
        SidebarModule.forRoot(),
        RouterModule
       
        
       
    ],
    
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        SignUpComponent,
        ProfileComponent,
        ExamTeacherComponent,
        ExamComponent,
        HomeAdminComponent,
        TeacherDetailsComponent,
        CoursesComponent,
        EditUserComponent,
        EditCourseComponent,
        SchedularComponent,
        AttendenceComponent,
        StudenthomeComponent,
        ProfileTeacherComponent
    
       
    ],
    providers: [
        UserService ,
        AuthGuard,
        TeacherService,
        ClassService,
        LevelService,
        CourseService,
        StudentService,
        HomeworkService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }