import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};

  constructor(private router: Router, private authenticationservice: AuthenticationService, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    if (!this.authenticationservice.singin(this.user)){
      console.log('Usuario o contrasena invalida');
    }
    else {
      this.authenticationservice.singin(this.user).subscribe( (res:any) => {
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['dashboard']);
        this.dialogRef.close('Satisfactorio');
      })
    }
  }
}
