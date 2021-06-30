import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/teacher/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { ExamTeacherComponent } from './components/teacher/exam-teacher/exam-teacher.component';
import { ExamComponent } from './components/exam/exam/exam.component';
const routes: Routes = [
  {path:'header',component:HeaderComponent},
    { path: 'register', component: SignUpComponent },
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    //teacher profile
    { path: 'teacher/profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
    //Exams of teacher page
    { path: 'teacher/:id/exams', component: ExamTeacherComponent, canActivate: [AuthGuard]},
    //Exam Page
    { path: 'exam/:id', component: ExamComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
    
   
];


// export const appRoutingModule = RouterModule.forRoot(routes);






// import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// const routes: Routes = [
//   {
//     path: 'books',
//     component: HeaderComponent,
//     data: { title: 'Book List' }
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//     data: { title: 'Login' }
//   },
//   {
//     path: 'signup',
//     component: RegisterComponent,
//     data: { title: 'Sign Up' }
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(
//     routes,
//     { enableTracing: true } // <-- debugging purposes only,
    

//   ),
//   ReactiveFormsModule,
//   FormsModule,],
//   exports: [RouterModule],
// })
export const appRoutingModule = RouterModule.forRoot(routes);
