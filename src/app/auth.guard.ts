import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from './shared/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private authservice: AuthenticationService, private router: Router)
 {

 }

 canActivate(): any
 {
    this.authservice.userData.subscribe(res=>{
      console.log('Guard',res);
        if(res){
            //this.router.navigate(['/dashboard']);
            return true;
        }
        else{
            //this.router.navigate(['/home']);
            return false;
        }
      });
 }
}