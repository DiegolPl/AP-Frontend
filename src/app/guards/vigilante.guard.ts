import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

  constructor(private router:Router){}

  redirect(flag: boolean):any {
    if(!flag){
      Swal.fire({
        icon: 'error',
        title: 'Acceso denegado',
        text: 'Debes hacer login para ingresar!'
      })
      this.router.navigate(['index'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem('access-token')){
        return true;
      }else{
        this.redirect(false);
        return false;
      }
  }
  
}
