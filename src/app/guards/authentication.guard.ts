import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authenticatoinservice: AuthenticationService){}

  canActivate():boolean {
    if (!this.authenticatoinservice.isAuth()){
      console.log('El Token no es valido');
      return false
    }
    return true;
  }

}
