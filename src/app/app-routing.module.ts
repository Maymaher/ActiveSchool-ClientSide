import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/admin/courses/courses.component';
import { EditCourseComponent } from './components/admin/edit-course/edit-course.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { HomeAdminComponent } from './components/admin/home/home.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { TeacherDetailsComponent } from './components/admin/teacher-details/teacher-details.component';
import { CourseComponent } from './components/course/course/course.component';
import { ExamComponent } from './components/exam/exam/exam.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AttendenceComponent } from './components/student/attendence/attendence.component';
import { ProfileComponent } from './components/student/profile/profile.component';
import { SchedularComponent } from './components/student/schedular/schedular.component';
import { StudenGradesComponent } from './components/student/studen-grades/studen-grades.component';
import { StudenthomeComponent } from './components/student/studenthome/studenthome.component';
import { AddStudentsGradesComponent } from './components/teacher/add-students-grades/add-students-grades.component';
import { ExamTeacherComponent } from './components/teacher/exam-teacher/exam-teacher.component';
import { ProfileTeacherComponent } from './components/teacher/profile/profile.component';
import { StudentsExamAnswersComponent } from './components/teacher/students-exam-answers/students-exam-answers.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    // { path: 'home', component: HomeComponent},

    {path:'home',component:StudenthomeComponent,canActivate: [AuthGuard]},

    {path:'header',component:HeaderComponent,canActivate: [AuthGuard]},
    { path: 'register', component: SignUpComponent },
    { path: 'admin/home', component: HomeAdminComponent ,canActivate: [AuthGuard]},
    { path: 'admin/teacherDetails/:id', component: TeacherDetailsComponent ,canActivate: [AuthGuard]},
    { path: 'admin/teacherDetails/:id/:courseId', component: TeacherDetailsComponent ,canActivate: [AuthGuard]},
    { path: 'admin/editUser/:id', component: EditUserComponent ,canActivate: [AuthGuard]},

    { path: 'admin/editCourse/:id', component: EditCourseComponent ,canActivate: [AuthGuard]},

    { path: 'admin/courses', component: CoursesComponent ,canActivate: [AuthGuard]},

    {path:'student/profile',component:ProfileComponent,canActivate: [AuthGuard]},
    {path:'student/schedular',component:SchedularComponent,canActivate: [AuthGuard]},
    {path:'student/attendence',component:AttendenceComponent,canActivate: [AuthGuard]},
    {path:'student/grades',component:StudenGradesComponent,canActivate: [AuthGuard]},
    { path: '', component: LoginComponent },
    // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    //teacher profile
    { path: 'teacher/profile/:id', component: ProfileTeacherComponent, canActivate: [AuthGuard]},

    //Exams of teacher page
    { path: 'teacher/:id/exams', component: ExamTeacherComponent, canActivate: [AuthGuard]},
    { path: 'teacher/examAnswers/:id', component: StudentsExamAnswersComponent, canActivate: [AuthGuard]},
    {path:'teacher/examGrade/:stud_id/:exam_id',component:AddStudentsGradesComponent},

    //Exam Page
    { path: 'exam/:id', component: ExamComponent, canActivate: [AuthGuard]},
    //Course Page
    { path: 'course/:id', component: CourseComponent, canActivate: [AuthGuard]},
    // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' ,canActivate: [AuthGuard]},
   

    
   
];


 
 
   

// export const appRoutingModule = RouterModule.forRoot(routes);

export const appRoutingModule = RouterModule.forRoot(routes);
