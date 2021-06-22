// import { TestBed } from '@angular/core/testing';

// import { AuthGuard } from './auth.guard';

// describe('AuthGuard', () => {
//   let guard: AuthGuard;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     guard = TestBed.inject(AuthGuard);
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });
// });
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _userService: UserService,
    private _router :Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._userService.isLoggedIn()) {
      return true;
    }

    this._router.navigate(['/'], { queryParams: { returnUrl: state.url }} );
    return false;
  }
}