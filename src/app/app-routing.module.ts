import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'header',component:HeaderComponent},
    { path: 'register', component: SignUpComponent },
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
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
