import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiPath = environment.apiPath;
    if (!apiPath.startsWith('./')) {
      if (!apiPath.startsWith('/')) {
        apiPath = '/' + apiPath;
      }
      if (!apiPath.startsWith('.')) {
        apiPath = '.' + apiPath;
      }
    }
    if (apiPath.endsWith('/')) {
      apiPath = apiPath.slice(0, -1);
    }

    let apiUrl = req.url;
    if (!apiUrl.startsWith('/')) {
      apiUrl = '/' + apiUrl;
    }

    const newReq = req.clone({
      url: apiPath + apiUrl
    });

    return next.handle(newReq);
  }
}
