import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService) { }

  singin(user:any){
    return this.http.post(`${this.URL}/users/singin`,user);
  }

  public isAuth():boolean{
    const token: any = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
