import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/admin/home/home.component';
import { SignUpComponent } from './components/admin/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
    {path:'header',component:HeaderComponent},
    { path: 'register', component: SignUpComponent },
    { path: 'admin/home', component: HomeAdminComponent ,canActivate: [AuthGuard]},
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
    
   
];


// export const appRoutingModule = RouterModule.forRoot(routes);

export const appRoutingModule = RouterModule.forRoot(routes);
