import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataPublicaService } from 'src/app/service/parte-publica/data-publica.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  miPerfil:any = [];
  faTimes = faTimes;

  constructor(private dataPublicaService:DataPublicaService) { }

  ngOnInit(): void {
    this.dataPublicaService.getPerfil().subscribe(data => this.miPerfil = data);
  }

}
