import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private http:HttpClient) { }

  executeBasicAuth(name, password){
    let userName=name;
    let pwd = password;
    let basicAuthHeaderString = "Basic "+window.btoa(userName+":"+pwd);
    let header = new HttpHeaders({
      Authorization:basicAuthHeaderString,
    });
    console.log(header);
      return (this.http.get('http://localhost:8080/basicAuth',{ headers:header})).pipe(
        map(data=>{
          sessionStorage.setItem('authenticatedUser',userName);
          sessionStorage.setItem('token',basicAuthHeaderString);
          return data;
        })
      );
  }

  isUserLoggedIn(){
    return sessionStorage.getItem('authenticatedUser');
  }

  isAuthenticatedTokenAvailable(){
    if(this.isUserLoggedIn()){
    return sessionStorage.getItem('token');
    }
  }

  logoutUser(){
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("token");
  }
}
