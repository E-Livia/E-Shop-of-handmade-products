import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService=this.inject.get(AuthServiceService);
    // let jwtToken=req.clone({
    //   setHeaders:{
    //     Authorization: 'bearer' +authService.GetToken()
    //   }
    // });
    let jwtToken=req;
    jwtToken=this.AddTokenHeader(req,authService.GetToken());
    return next.handle(jwtToken).pipe(
      catchError(errorData=>{
        if (errorData.status === 401) {
          // need to implement logout
          //authService.Logout();
          // refresh token logic
          this.handleRefreshToken(req,next);
        //  return this.handleRefrehToken(request, next);
        }
        return throwError(errorData);
      })
    );
  }

  handleRefreshToken(req: HttpRequest<any>, next: HttpHandler){
    let authService=this.inject.get(AuthServiceService);
    return authService.GenerateRefreshToken().pipe(
      switchMap((data:any)=>{
        authService.SaveTokens(data);
        return next.handle(this.AddTokenHeader(req,data.jwtToken))
      }),
      catchError(errorData=>{
        authService.Logout();
        return throwError(errorData);
      })
    );
  }

  AddTokenHeader(request:HttpRequest<any>,token:any){
    return request.clone({headers:request.headers.set('Authorization','bearer'+token)});
  }
}
