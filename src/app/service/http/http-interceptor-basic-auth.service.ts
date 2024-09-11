import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private hardcodedAuth: HardcodedAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(this.hardcodedAuth.isUserLoggedIn() && this.hardcodedAuth.isAuthenticatedTokenAvailable()){
    req = req.clone({
      setHeaders:{
        Authorization: this.hardcodedAuth.isAuthenticatedTokenAvailable()
      }
    });
  }
    return next.handle(req);
  }
}
