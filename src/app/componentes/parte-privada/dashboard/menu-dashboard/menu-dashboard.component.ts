import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  styleUrls: ['./menu-dashboard.component.css']
})
export class MenuDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  habilitarForm(id:string){
    //Obtener los hijos del body dashboard - los pongo en d-none y concateno el id pasado para obtener el form que debo poner con d-block
    if(id === '1'){
      this.activarMenu('1');
    }
    document.querySelectorAll('.e-form')?.forEach(form => form.classList.remove('d-block'));
    document.querySelectorAll('.e-form')?.forEach(form => form.classList.add('d-none'));
    document.getElementById(`form-${id}`)?.classList.remove('d-none');
    document.getElementById(`form-${id}`)?.classList.add('d-block');
  }

  activarMenu(id:string){
    document.querySelectorAll('.nav-link')?.forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${id}`)?.classList.add('active');
  }

}
