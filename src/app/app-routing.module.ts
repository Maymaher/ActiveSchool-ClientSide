import { RouterModule, Routes } from '@angular/router';
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
import { SchedularComponent } from './components/student/schedular/schedular.component';
import { AuthGuard } from './guards/auth.guard';
import { StudenthomeComponent } from './components/student/studenthome/studenthome.component';


const routes: Routes = [
    {path:'home',component:StudenthomeComponent,canActivate: [AuthGuard]},
    {path:'header',component:HeaderComponent},
    { path: 'register', component: SignUpComponent },
    { path: 'admin/home', component: HomeAdminComponent ,canActivate: [AuthGuard]},
    { path: 'admin/teacherDetails/:id', component: TeacherDetailsComponent ,canActivate: [AuthGuard]},
    { path: 'admin/teacherDetails/:id/:courseId', component: TeacherDetailsComponent ,canActivate: [AuthGuard]},
    { path: 'admin/editUser/:id', component: EditUserComponent ,canActivate: [AuthGuard]},

    { path: 'admin/editCourse/:id', component: EditCourseComponent ,canActivate: [AuthGuard]},

    { path: 'admin/courses', component: CoursesComponent ,canActivate: [AuthGuard]},

    {path:'student/profile',component:ProfileComponent},
    {path:'student/schedular',component:SchedularComponent},
    {path:'student/attendence',component:AttendenceComponent},
    { path: '', component: LoginComponent },
    // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
   

    
   
];


// export const appRoutingModule = RouterModule.forRoot(routes);

export const appRoutingModule = RouterModule.forRoot(routes);
