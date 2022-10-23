import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataPublicaService } from 'src/app/service/parte-publica/data-publica.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  miProyecto:any = [];
  faTimes = faTimes;

  constructor(private dataPublicaService:DataPublicaService) { }

  ngOnInit(): void {
    this.dataPublicaService.getProyectos().subscribe(data => this.miProyecto = data);
  }

}
