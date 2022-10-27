import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent implements OnInit {

  faTimes = faTimes;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faUser = faUser;
  faBars = faBars;

  myPorfolio:any = [];

  constructor(private router:Router) { }

  // Abrir menu desde el boton de hamburguesa en versiones moviles
  activarMenu(){
    document.getElementById('menu-navbar')?.classList.toggle('active');
    document.getElementById('menu-btn-close')?.classList.toggle('d-none');
    document.getElementById('menu-btn')?.classList.toggle('d-none');
  }

  // Cerrar menu desde el boton de la X en versiones moviles
  desactivarMenu(){
    document.getElementById('menu-navbar')?.classList.toggle('active');
    document.getElementById('menu-btn-close')?.classList.toggle('d-none');
    document.getElementById('menu-btn')?.classList.toggle('d-none');
  }

  // Sistema de deslogueo
  logout() {
    
    sessionStorage.removeItem("access-token");

    let anchoVentana = window.innerWidth;

    if(anchoVentana < 767){
      this.desactivarMenu()
    }
    
    this.router.navigate(['/index'])
    
  }

  ngOnInit(): void {
  }

}
