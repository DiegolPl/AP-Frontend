import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataTemporalService } from 'src/app/service/parte-publica/data-temporal.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  miPorfolio:any = [];
  faTimes = faTimes;

  constructor(private dataTemporalService:DataTemporalService) { }

  ngOnInit(): void {
    this.dataTemporalService.getData().subscribe(data => this.miPorfolio = data);
  }

}
