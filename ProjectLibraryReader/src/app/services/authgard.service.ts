import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardService {

  constructor(
    private authSrv: AuthentificationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if (this.authSrv.isAuthentificate()) {
      return true;
    } else {
      this.router.navigate(['login',{ru : route.url}]);
      return false; 
    }
  }
}
