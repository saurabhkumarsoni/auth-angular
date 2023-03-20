import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { take, exhaustMap} from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {

        const modifiedReq =req.clone({
            headers: req.headers.set(
              'authorization', 'Bearer ' + JSON.stringify(user)
            )
          })
        return next.handle(modifiedReq);
      })
    )
  }
}