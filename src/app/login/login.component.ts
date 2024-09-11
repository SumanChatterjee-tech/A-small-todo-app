import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  blnSucessLogin:boolean = true;
  username="";
  password="";
  constructor(private router:Router, private hardcodedAuth:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    this.hardcodedAuth.executeBasicAuth(this.username, this.password).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/welcome', this.username]);
    },error=>{
      console.log(error);
      this.blnSucessLogin = false;
    });
  }
}
