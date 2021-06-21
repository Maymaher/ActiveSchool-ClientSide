import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);






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
//     { enableTracing: true } // <-- debugging purposes only
//   )],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
